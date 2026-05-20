import { useState } from "react";
import { FaLink, FaCopy } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Section from "../components/Section";
import Faq from "../components/Faq.jsx";
import { toast } from "react-toastify";

function Home() {
  const [url, setUrl] = useState("");
  const [video, setVideo] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const navigate = useNavigate();

  const handleDownload = async () => {
    if (!url) {
      toast.error("Please Enter Pinterest URL");
      return;
    }

    if (!baseUrl) {
      toast.error("API URL missing");
      return;
    }

    try {
      setLoading(true);
      setProgress(0);

      let current = 0;

      const interval = setInterval(() => {
        current += 5;

        if (current < 95) {
          setProgress(current);
        }
      }, 200);

      const response = await fetch(
        `${baseUrl}/download?url=${encodeURIComponent(url)}`
      );

      if (!response.ok) {
        throw new Error(`Server Error: ${response.status}`);
      }

      const data = await response.json();

      clearInterval(interval);

      setProgress(100);

      setTimeout(() => {
        if (data.success) {
          navigate("/download", {
            state: {
              video: data.video || "",
              image: data.image || "",
            },
          });
        } else {
          toast.error(data.message || "Media not found");
          setLoading(false);
          setProgress(0);
        }
      }, 1000);

    } catch (err) {
      console.log(err);

      toast.error(err.message || "Backend error");

      setLoading(false);
      setProgress(0);
    }
  };

  const downloadFile = (fileUrl) => {
    if (!fileUrl) return;

    const proxyUrl =
      `${baseUrl}/proxy?url=${encodeURIComponent(fileUrl)}`;

    const link = document.createElement("a");

    link.href = proxyUrl;

    link.setAttribute("download", "pinterest-media");

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  const pasteUrl = async () => {
    try {
      const text = await navigator.clipboard.readText();

      const urlPattern =
        /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/;

      if (!urlPattern.test(text.trim())) {
        toast.error(
          "Invalid URL.Please enter a valid Pinterest URL."
        );
        return;
      }

      setUrl(text.trim());

      toast.success("URL pasted");

    } catch (err) {
      console.log("Paste failed", err);
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">

          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>

          <h2 className="mt-6 text-2xl font-bold text-gray-800">
            Processing...
          </h2>

          <p className="mt-2 text-gray-500">
            {progress < 100
              ? `Loading ${progress}%`
              : "Preparing your download..."}
          </p>

        </div>
      )}

      <div className="bg-[#ecf0f1] flex flex-col items-center pt-8 pb-20 px-4">

        <h1 className="text-4xl font-bold text-gray-800 text-center tracking-tight ">
          pintrestdownloader.net
        </h1>

        <p className="text-gray-600 text-center mt-2 text-xl ">
          The website is mainly dedicated to downloading Pinterest videos,
          images, and GIFs online for free (without watermark).
        </p>

        <div className="mt-8 w-full max-w-4xl flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-md shadow-md overflow-hidden border border-gray-200">

          <div className="flex items-center w-full sm:flex-1 px-3 border-b sm:border-b-0 sm:border-r border-gray-200">

            <div className="text-red-500">
              <FaLink />
            </div>

            <input
              type="text"
              placeholder="Paste Pinterest URL here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 py-3 px-2 outline-none text-gray-700"
            />

            <button
              onClick={pasteUrl}
              className="text-gray-500 hover:text-red-500 transition"
            >
              <FaCopy />
            </button>

          </div>

          <button
            onClick={handleDownload}
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-semibold transition disabled:opacity-50 w-full sm:w-auto"
          >
            {loading ? "Please wait..." : "Download"}
          </button>

        </div>

        {video && (
          <div className="mt-10 w-full max-w-2xl text-center">

            <video
              controls
              autoPlay
              className="w-full rounded-lg shadow-md"
            >
              <source src={video} type="video/mp4" />
            </video>

            <button
              onClick={() => downloadFile(video)}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold"
            >
              Download Video
            </button>

          </div>
        )}

        {!video && image && (
          <div className="mt-10 w-full max-w-2xl text-center">

            <img
              src={image}
              alt="Pinterest"
              className="w-full rounded-lg shadow-md"
            />

            <button
              onClick={() => downloadFile(image)}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold"
            >
              Download Image
            </button>

          </div>
        )}

        <div className="mt-10 w-full max-w-4xl bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">

          <h2 className="px-6 py-4 text-lg font-semibold text-gray-800 border-b border-gray-200 bg-gray-50">
            Discover more
          </h2>

          <div className="divide-y divide-gray-200">

            <div className="flex items-center justify-between px-6 py-2 discover-item">
              <span>Download Input Box</span>
              <span className="arrow">›</span>
            </div>

            <div className="flex items-center justify-between px-6 py-2 discover-item">
              <span>Video Software</span>
              <span className="arrow">›</span>
            </div>

            <div className="flex items-center justify-between px-6 py-2 discover-item">
              <span>TV & Video</span>
              <span className="arrow">›</span>
            </div>

          </div>

        </div>

      </div>

      <Section />

      {/* <Faq/> */}
    </>
  );
}

export default Home;