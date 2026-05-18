import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

export const homeController = (req, res) => {
  res.send("Pinterest Downloader API Running...");
};

export const downloadController = async (req, res) => {

  let browser;

  try {

    const url = req.query.url;

    if (!url) {
      return res.json({
        success: false,
        message: "URL missing",
      });
    }

  browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: true,
  });

  const page = await browser.newPage();
  await page.setRequestInterception(true);

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

      // await page.setUserAgent(
      //   "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
      // );
  await page.setDefaultNavigationTimeout(15000);
      await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: 15000,
      });
    


    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });



    const html = await page.content();

    let videoUrl = "";

    const matches =
      html.match(
        /https:\/\/v1\.pinimg\.com\/videos\/[^"]+\.mp4/g
      ) ||
      html.match(
        /https:\/\/v\.pinimg\.com\/[^"]+\.mp4/g
      );

    if (matches && matches.length > 0) {

      videoUrl = matches[0];

      videoUrl = videoUrl.split('"')[0];
    }

    const image = await page.evaluate(() => {

      const ogImage = document.querySelector(
        'meta[property="og:image"]'
      );

      return ogImage
        ? ogImage.content
        : "";
    });

    await browser.close();

    res.json({
      success: true,
      image,
      video: videoUrl,
    });

  } catch (error) {

    if (browser) {
      await browser.close();
    }

    console.log(error);

    res.json({
      success: false,
      error: error.message,
    });
  }
};

export const proxyController = async (req, res) => {

  try {

    const url = req.query.url;

   if (!url || !url.includes("pinterest.com")) {
      return res.status(400).send("URL missing");
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

    if (contentType.includes("mp4")) {
      extension = "mp4";
    } else if (contentType.includes("jpeg")) {
      extension = "jpg";
    } else if (contentType.includes("png")) {
      extension = "png";
    }

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