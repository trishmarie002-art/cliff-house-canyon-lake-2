import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API Health route
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", property: "Cliff House at Canyon Lake", timestamp: new Date() });
});

// Helper function to format YYYYMMDD or YYYYMMDDTHHMMSSZ to YYYY-MM-DD
function parseIcalDate(dateStr: string): string | null {
  if (!dateStr) return null;
  // Remove parameters like DTSTART;VALUE=DATE:
  const raw = dateStr.includes(":") ? dateStr.split(":").pop() || "" : dateStr;
  const clean = raw.trim().replace(/[^0-9]/g, "");
  if (clean.length >= 8) {
    const year = clean.substring(0, 4);
    const month = clean.substring(4, 6);
    const day = clean.substring(6, 8);
    return `${year}-${month}-${day}`;
  }
  return null;
}

// iCal API route for Airbnb sync
app.get("/api/ical", async (_req, res) => {
  const icalUrl = process.env.AIRBNB_ICAL_URL?.trim();

  if (!icalUrl) {
    return res.json({
      configured: false,
      message: "Live availability is coming soon. View current dates on Airbnb.",
      blockedRanges: [],
      lastUpdated: new Date().toISOString(),
    });
  }

  try {
    const response = await fetch(icalUrl, {
      headers: {
        "User-Agent": "CliffHouseCanyonLake/1.0 (Calendar Sync)",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch iCal feed: ${response.statusText}`);
    }

    const text = await response.text();
    const blockedRanges: { start: string; end: string }[] = [];

    // Parse VEVENT entries
    const vevents = text.split("BEGIN:VEVENT");
    for (let i = 1; i < vevents.length; i++) {
      const eventContent = vevents[i].split("END:VEVENT")[0];
      const lines = eventContent.split(/\r?\n/);
      
      let dtstart = "";
      let dtend = "";
      let summary = "";

      for (const line of lines) {
        if (line.startsWith("DTSTART")) dtstart = line;
        else if (line.startsWith("DTEND")) dtend = line;
        else if (line.startsWith("SUMMARY")) summary = line;
      }

      const start = parseIcalDate(dtstart);
      const end = parseIcalDate(dtend);

      // Only add if valid dates found (Airbnb summary is usually 'Reserved' or 'Airbnb (Not available)')
      if (start && end) {
        blockedRanges.push({ start, end });
      }
    }

    return res.json({
      configured: true,
      message: "Synchronized with Airbnb calendar",
      blockedRanges,
      lastUpdated: new Date().toISOString(),
    });
  } catch (err: any) {
    console.error("iCal fetch/parse error:", err);
    return res.status(500).json({
      configured: false,
      error: "Could not sync live calendar at this moment",
      message: "Live availability is coming soon. View current dates on Airbnb.",
      blockedRanges: [],
      lastUpdated: new Date().toISOString(),
    });
  }
});

async function main() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Cliff House server running on http://0.0.0.0:${PORT}`);
  });
}

main();
