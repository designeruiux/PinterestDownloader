import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

let browser;

export const homeController = (req, res) => {
  res.send("Pinterest Downloader API Running...");
};

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

    if (!browser) {
      browser = await puppeteer.launch({
        args: [
          ...chromium.args,
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--disable-dev-shm-usage",
          "--single-process",
          "--no-zygote",
          "--disable-gpu",
        ],
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: true,
      });
    }

    page = await browser.newPage();

    await page.setRequestInterception(true);

    // FIX: avoid duplicate listeners
    

    page.on("request", (req) => {

      const type = req.resourceType();

      if (
        type === "image" ||
        type === "font" ||
        type === "stylesheet"
      ) {
        req.abort();
      } else {
        req.continue();
      }
    });

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
    );

    await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 15000,
    });

    const videoUrl = await page.evaluate(() => {

      const video =
        document.querySelector("video") ||
        document.querySelector("source");

      return video ? video.src : "";
    });

    const image = await page.evaluate(() => {

      const ogImage = document.querySelector(
        'meta[property="og:image"]'
      );

      return ogImage ? ogImage.content : "";
    });

    await page.close();

    res.json({
      success: true,
      image,
      video: videoUrl,
    });

  } catch (error) {

    console.log("ERROR:", error);

    if (page) await page.close();

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const proxyController = async (req, res) => {

  try {

    const url = req.query.url;

    if (!url.includes("pinterest.com")) {
      return res.status(400).json({
        success: false,
        message: "Invalid Pinterest URL",
      });
    }

    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
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

    res.send(Buffer.from(buffer));

  } catch (err) {

    console.log(err);

    res.status(500).send("Download failed");
  }
};