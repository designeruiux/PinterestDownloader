import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Download() {
  const location = useLocation();
  const navigate = useNavigate();

  const { video, image } = location.state || {};

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  // STATES
  const [progress, setProgress] = useState(0);
  const [downloading, setDownloading] = useState(false);
  const [completed, setCompleted] = useState(false);

  // DOWNLOAD FUNCTION
const downloadFile = async (fileUrl) => {
  if (!fileUrl || downloading) return;

  setDownloading(true);
  setCompleted(false);
  setProgress(0);

  let current = 0;

  const interval = setInterval(() => {
    current += 1;

    if (current <= 100) {
      setProgress(current);
    }
  }, 30);

  try {
    const proxyUrl =
      `${baseUrl}/proxy?url=${encodeURIComponent(fileUrl)}`;

    const startTime = Date.now();

    const response = await fetch(proxyUrl);
    const blob = await response.blob();

    const elapsed = Date.now() - startTime;

    const minimumTime = 1000;

    if (elapsed < minimumTime) {
      await new Promise((resolve) =>
        setTimeout(resolve, minimumTime - elapsed)
      );
    }

    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.setAttribute(
  "download",
  video ? "pinterest-video.mp4" : "pinterest-image.jpg"
);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    clearInterval(interval);

    setProgress(100);

    setTimeout(() => {
      setCompleted(true);
      setDownloading(false);
    }, 500);

  } catch (error) {
    console.error("Download failed:", error);

    clearInterval(interval);

    setDownloading(false);
    setCompleted(false);
    setProgress(0);
  }
};

  return (
    <div className="min-h-screen bg-[#ecf0f1] px-4 py-8">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Pinterest Video Downloader
      </h1>

      <p className="text-center text-gray-600 mt-2 text-lg">
        Download Pinterest videos, images, and GIFs online for free.
      </p>

      {/* MAIN SECTION */}
      <div className="max-w-5xl mx-auto mt-10 flex flex-col lg:flex-row gap-15">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center">

          {/* MEDIA BOX */}
          <div className=" max-w-[210px] bg-white rounded-[10px] p-3 shadow-md border border-gray-200 ">

            {video && (
              <video
                controls
                autoPlay
                className="w-full rounded-md"
              >
                <source src={video} type="video/mp4" />
              </video>
            )}

            {!video && image && (
              <img
                src={image}
                alt="Pinterest"
                className="w-full rounded-md"
              />
            )}

          </div>

          {/* BUTTON */}
          {/* <button
            onClick={() => navigate("/")}
            className="mt-5 bg-[#23364d] hover:bg-[#1a2b40] text-white px-6 py-3 rounded-md font-semibold shadow-lg"
          >
            Download Another Video
          </button> */}

        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1">

          {/* DISCOVER SECTION */}
          <div className="mt-10 w-full max-w-4xl bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">

            <h2 className="px-6 py-4 text-lg font-semibold text-gray-800 border-b border-gray-200  bg-gray-50">
              Discover more
            </h2>

            <div className="divide-y divide-gray-200">

              <div className="flex items-center justify-between px-6 py-2 discover-item">
                <span>Pinterest marketing strategies</span>
                <span className="arrow">›</span>
              </div>

              <div className="flex items-center justify-between px-6 py-2 discover-item">
                <span>Free content downloads</span>
                <span className="arrow">›</span>
              </div>

              <div className="flex items-center justify-between px-6 py-2 discover-item">
                <span>KlickPin premium features</span>
                <span className="arrow">›</span>
              </div>

            </div>

          </div>

          {/* DOWNLOAD BUTTON */}
        <div className="mt-9 bg-white rounded-xl shadow-md p-7">

        <div className="flex flex-col sm:flex-row gap-4">

            {/* DOWNLOAD BUTTON */}
            <button
              onClick={() => downloadFile(video || image)}
              disabled={downloading}
              className="sm:flex-[2] flex-1 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white py-3 rounded-md text-lg font-bold transition-all duration-300"
            >
              {completed
                ? "Download Complete"
                : downloading
                ? `Downloading ${progress}%`
                : "DOWNLOAD"}
            </button>

            {/* ANOTHER VIDEO BUTTON */}
            <button
              onClick={() => navigate("/")}
              className="sm:flex-1 bg-[#23364d] hover:bg-[#1a2b40] text-white py-3 rounded-md font-semibold shadow-lg transition-all duration-300"
            >
              Download Another Video
            </button>

          </div>

        </div>

        </div>

      </div>

    </div>
  );
}

export default Download;