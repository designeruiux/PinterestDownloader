import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

let browser;
const pagePool = [];
const cache = new Map();

const MAX_PAGES = 3;

/* =========================
   BROWSER INIT (WARM START)
========================= */
export const initBrowser = async () => {
  if (!browser) {
    browser = await puppeteer.launch({
      args: [
        ...chromium.args,
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--single-process",
      ],
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });

    console.log("🚀 Browser initialized");
  }

  return browser;
};

/* =========================
   PAGE POOL
========================= */
const getPage = async () => {
  const browserInstance = await initBrowser();

  if (pagePool.length > 0) {
    return pagePool.pop();
  }

  const page = await browserInstance.newPage();

  // Block heavy resources (speed boost)
  await page.setRequestInterception(true);

  page.on("request", (req) => {
    const type = req.resourceType();

    if (["image", "font", "stylesheet"].includes(type)) {
      req.abort();
    } else {
      req.continue();
    }
  });

  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
  );

  return page;
};

const releasePage = (page) => {
  try {
    if (pagePool.length < MAX_PAGES) {
      pagePool.push(page);
    } else {
      page.close();
    }
  } catch (err) {
    console.log("Page release error:", err.message);
  }
};

/* =========================
   HOME CONTROLLER
========================= */
export const homeController = (req, res) => {
  res.send("Pinterest Downloader API Running...");
};

/* =========================
   DOWNLOAD CONTROLLER
========================= */
export const downloadController = async (req, res) => {
  let page;

  try {
    const url = req.query.url;

    if (!url) {
      return res.json({
        success: false,
        message: "URL missing",
      });
    }

    /* =========================
       CACHE CHECK (FAST PATH)
    ========================= */
    if (cache.has(url)) {
      return res.json({
        success: true,
        cached: true,
        ...cache.get(url),
      });
    }

    /* =========================
       GET PAGE
    ========================= */
    page = await getPage();

    /* =========================
       FAST NAVIGATION
    ========================= */
    await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 15000,
    });

    /* =========================
       EXTRACT HTML
    ========================= */
    const html = await page.content();

    /* =========================
       VIDEO EXTRACTION
    ========================= */
    let videoUrl = "";

    const matches =
      html.match(/https:\/\/v1\.pinimg\.com\/videos\/[^"]+\.mp4/) ||
      html.match(/https:\/\/v\.pinimg\.com\/[^"]+\.mp4/);

    if (matches && matches.length > 0) {
      videoUrl = matches[0].split('"')[0];
    }

    /* =========================
       IMAGE EXTRACTION
    ========================= */
    const image = await page.evaluate(() => {
      const ogImage = document.querySelector('meta[property="og:image"]');
      return ogImage ? ogImage.content : "";
    });

    const result = {
      image,
      video: videoUrl,
    };

    /* =========================
       SAVE CACHE
    ========================= */
    cache.set(url, result);

    return res.json({
      success: true,
      cached: false,
      ...result,
    });
  } catch (error) {
    console.log("Error:", error.message);

    return res.json({
      success: false,
      error: error.message,
    });
  } finally {
    if (page) {
      releasePage(page);
    }
  }
};

/* =========================
   PROXY CONTROLLER
========================= */
export const proxyController = async (req, res) => {
  try {
    const url = req.query.url;

    if (!url) {
      return res.status(400).send("URL missing");
    }

    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (!response.ok) {
      return res.status(500).send("Download failed");
    }

    const contentType =
      response.headers.get("content-type") ||
      "application/octet-stream";

    let extension = "file";

    if (contentType.includes("mp4")) extension = "mp4";
    else if (contentType.includes("jpeg")) extension = "jpg";
    else if (contentType.includes("png")) extension = "png";

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="pinterest.${extension}"`
    );

    res.setHeader("Content-Type", contentType);

    const buffer = await response.arrayBuffer();

    return res.send(Buffer.from(buffer));
  } catch (err) {
    console.log(err);
    return res.status(500).send("Download failed");
  }
};