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
       
    "--disable-gpu",
    ],
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  });
}

 page = await browser.newPage();

await page.setUserAgent(
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
);

await page.setRequestInterception(true);

page.on("request", (req) => {
  const type = req.resourceType();

  if (["font", "stylesheet"].includes(type)) {
    req.abort();
  } else {
    req.continue();
  }
});
  await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 20000,
    });
    // await new Promise((r) => setTimeout(r, 800));


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

   
   return res.json({
  success: true,
  image,
  video: videoUrl,
});

  } catch (error) {

   
    console.log(error);

    res.json({
      success: false,
      error: error.message,
    });
  }finally {

  if (page) {
    await page.close();
  }

}
};

export const proxyController = async (req, res) => {

  try {

    const url = req.query.url;

    if (!url) {
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