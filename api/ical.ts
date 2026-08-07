type ApiResponse = {
  status: (code: number) => ApiResponse;
  setHeader: (name: string, value: string) => void;
  json: (body: unknown) => void;
};

function parseDate(value: string): Date | null {
  const match = value.match(/:(\d{4})(\d{2})(\d{2})/);
  if (!match) return null;
  return new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
}

function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export default async function handler(_request: unknown, response: ApiResponse) {
  const icalUrl = process.env.AIRBNB_ICAL_URL?.trim();
  response.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=3600');

  if (!icalUrl) {
    return response.status(200).json({
      configured: false,
      message: 'The Airbnb calendar link has not been connected yet.',
      blockedRanges: [],
      lastUpdated: new Date().toISOString(),
    });
  }

  try {
    const calendarResponse = await fetch(icalUrl, {
      headers: { 'User-Agent': 'CliffHouseCanyonLake/1.0' },
      cache: 'no-store',
    });
    if (!calendarResponse.ok) throw new Error(`Airbnb returned ${calendarResponse.status}`);

    const calendar = (await calendarResponse.text()).replace(/\r?\n[ \t]/g, '');
    const blockedRanges: Array<{ start: string; end: string }> = [];

    for (const event of calendar.split('BEGIN:VEVENT').slice(1)) {
      const body = event.split('END:VEVENT')[0];
      const startLine = body.split(/\r?\n/).find((line) => line.startsWith('DTSTART'));
      const endLine = body.split(/\r?\n/).find((line) => line.startsWith('DTEND'));
      if (!startLine || !endLine) continue;

      const start = parseDate(startLine);
      const checkout = parseDate(endLine);
      if (!start || !checkout || checkout <= start) continue;

      const finalBlockedNight = new Date(checkout.getTime() - 86_400_000);
      blockedRanges.push({ start: formatDate(start), end: formatDate(finalBlockedNight) });
    }

    return response.status(200).json({
      configured: true,
      message: 'Live availability synchronized with Airbnb.',
      blockedRanges,
      lastUpdated: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Airbnb calendar sync failed', error);
    return response.status(502).json({
      configured: false,
      message: 'Live availability could not be refreshed. View current dates on Airbnb.',
      blockedRanges: [],
      lastUpdated: new Date().toISOString(),
    });
  }
}
