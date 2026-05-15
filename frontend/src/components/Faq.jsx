import React from "react";

function Faq() {
  return (
    <div className="w-full flex justify-center px-4 mt-14">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT SIDE */}
        <div className="bg-white border border-gray-300 rounded-md overflow-hidden shadow-sm">

          {/* HEADER */}
          <div className="px-6 py-4 border-b border-gray-300 bg-[#f5f5f5] flex items-center gap-3">
          

            <h2 className="text-3xl font-bold text-[#1f2d3d]">
              Questions & Answers !!
            </h2>
          </div>

          {/* SCROLL AREA */}
          <div className="faq-scroll h-[618px] overflow-y-auto p-6 bg-[#fafafa]">

            {/* BOX 1 */}
            <div className="border border-gray-300 rounded-md overflow-hidden ">
              <div className="bg-[#eceff1] px-4 py-3">
                <h3 className="text-[17px] leading-tight font-bold text-[#243447]">
                  Can I download videos from Pinterest?
                </h3>
              </div>

              <div className="bg-[#4b00d1] text-white p-5 text-[16px] leading-8 font-medium">
                Yes, with KlickPin, you can easily download videos from
                Pinterest. Just copy the Pinterest video URL, paste it in the
                form above, and click the Download button. The video will be
                downloaded to your PC or mobile device.
              </div>
            </div>

            {/* BOX 2 */}
            <div className="border border-gray-300 rounded-md overflow-hidden">
              <div className="bg-[#eceff1] px-4 py-3">
                <h3 className="text-[17px] leading-tight font-bold text-[#243447]">
                  How to download Pinterest videos?
                </h3>
              </div>

              <div className="bg-[#3f00c5] text-white p-5">
                <ol className="list-decimal pl-6 space-y-4 text-[16px] leading-8 font-medium">
                  <li>
                    Enter the Pinterest video URL that you want to download.
                  </li>

                  <li>
                    Paste the URL into our downloader box.
                  </li>

                  <li>
                    Click the Download button.
                  </li>

                  <li>
                    The download process will start immediately.
                  </li>

                  <li>
                    The video will be saved directly to your system.
                  </li>
                </ol>
              </div>
            </div>

             {/* BOX 3 */}
         <div className="border border-gray-300 rounded-md overflow-hidden">

            {/* HEADER */}
            <div className="bg-[#eceff1] px-4 py-3">
                <h3 className="text-[17px] leading-tight font-bold text-[#243447]">
                How can I download images from Pinterest?
                </h3>
            </div>

            {/* CONTENT */}
            <div className="bg-[#3f00c5] text-white p-5">

                <div className="space-y-4 text-[16px] leading-8 font-medium">

                <p>
                    To download images from Pinterest, follow the same steps as
                </p>

                <p>
                    for videos. Copy the image URL, paste it into the form, and
                </p>

                <p>
                    click Download. The image will be saved to your device.
                </p>

                </div>

            </div>

            </div>


         {/* BOX 4 */}
              <div className="border border-gray-300 rounded-md overflow-hidden">

            {/* HEADER */}
            <div className="bg-[#eceff1] px-4 py-3">
                <h3 className="text-[17px] leading-tight font-bold text-[#243447]">
                Can I download GIFs from Pinterest?
                </h3>
            </div>

            {/* CONTENT */}
            <div className="bg-[#3f00c5] text-white p-5">

                <div className="space-y-4 text-[16px] leading-8 font-medium">

                <p>
                    Yes, KlickPin supports downloading GIFs from Pinterest.
                </p>

                <p>
                    Copy the GIF URL, paste it in the form above, and click the
                </p>

                <p>
                    Download button to save the GIF to your device.
                </p>

                </div>

            </div>

            </div>

              {/* BOX 5 */}
              <div className="border border-gray-300 rounded-md overflow-hidden">

            {/* HEADER */}
            <div className="bg-[#eceff1] px-4 py-3">
                <h3 className="text-[17px] leading-tight font-bold text-[#243447]">
               Where are files saved after being downloaded?
                </h3>
            </div>

            {/* CONTENT */}
            <div className="bg-[#3f00c5] text-white p-5">

                <div className="space-y-4 text-[16px] leading-8 font-medium">

                <p>
                    Downloaded files are typically saved in the "Downloads"
                </p>

                <p>
                    folder on your device. You can check your browser's
                </p>

                <p>
                   download history by pressing CTRL+J on your keyboard.
                </p>

                </div>

            </div>

            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white border border-gray-300 rounded-md overflow-hidden shadow-sm">

          {/* HEADER */}
          <div className="px-6 py-4 border-b border-gray-300 bg-[#f5f5f5]">
            <h2 className="text-3xl font-bold text-[#1f2d3d]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="p-5 bg-[#fafafa]">

            {/* ACTIVE ITEM */}
            <div className="border border-gray-300 rounded-md overflow-hidden mb-4">
              <div className="bg-[#eceff1] px-5 py-4">
                <h3 className="text-[17px] leading-tight font-bold text-[#243447]">
                  Why is the video playing instead of downloading?
                </h3>
              </div>

              <div className="bg-white px-6 py-7 text-center text-[17px] leading-10 text-[#2f3e4e]">
                <p>
                  This can happen if your browser is set to play videos by
                  default.
                </p>

                <p className="mt-2">
                  Right-click the link and select
                  <span className="font-bold"> "Save link as..." </span>
                  to download the video directly.
                </p>
              </div>
            </div>

            {/* FAQ ITEMS */}
            {[
              "Does KlickPin work on mobile devices?",
              "Can I download entire Pinterest boards?",
              "Can I download Pinterest artwork?",
              "Does KlickPin store downloaded files?",
              "Will there be a browser extension for KlickPin?"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#eceff1]  px-5 py-5 text-center mb-0 rounded-md faq-item cursor-pointer"
              >
                <h3 className="text-[17px] font-bold text-[#243447] leading-tight">
                  {item}
                </h3>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}

export default Faq;