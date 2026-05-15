import React from 'react'

function HowTo() {
  return (
    <div className="min-h-screen bg-[#ecf0f1] flex justify-center pb-10 pt-10 px-4">

 
      <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">

        {/* HEADER */}
        <div className="bg-gray-100 border-b border-gray-200 px-6 py-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            How To Download Pinterest Videos using KlickPin?
          </h2>
        </div>

        <div className="p-6 md:p-8 space-y-8">

          {/* DESCRIPTION */}
          <p className="text-[16px] md:text-base leading-7 text-gray-700">
            Klickpin is the <b>Best Pinterest video downloader</b> online.
            The steps below provide quick info on how to
            <b> download Pinterest videos, images, and GIFs </b>
            from both mobile app and desktop versions 
          </p>

          {/* MOBILE SECTION */}
          <div>
            <div className="bg-gray-100 px-4 py-3 rounded-md">
              <h3 className="font-semibold text-lg text-gray-800">
                Steps to Download from Mobile App
              </h3>
            </div>

            <ol className="mt-4 list-decimal pl-6 space-y-2 text-gray-700 text-[16px] leading-7">
              <li>Open the Pinterest App and select the video, image, or GIF you want to download.</li>
              <li>Tap on the ••• icon at the top right corner of the Pinterest app. If you are using the latest version, tap on the ••• icon at the bottom right corner of the app. After tapping the ••• icon, tap on the Copy Link option.</li>
              <li>Paste the video URL in the Download Input Box on the KlickPin website, and tap on the Download button.</li>
              <li>You will see a preview of your download file. Tap on the Download button just below it.</li>
              <li>The Pinterest video, image, or GIF will be downloaded to your device.</li>
            </ol>
          </div>

       

          {/* IMAGE SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

            {/* STEP 1 */}
            <div className="bg-gray-50 p-3 rounded-md">
                <img
                src="/step1.png"
                alt="step 1"
                className="mx-auto rounded-md shadow-sm"
                />
                <p className="mt-3 text-gray-600">
                Click 3 Dots
                </p>
            </div>

            {/* STEP 2 */}
            <div className="bg-gray-50 p-3 rounded-md ">
                <img
                src="/step2.png"
                alt="step 2"
                className="mx-auto rounded-md shadow-sm"
                />
                <p className="mt-3  text-gray-600">
                Click Copy Link
                </p>
            </div>

            {/* STEP 3 */}
            <div className="bg-gray-50 p-3 rounded-md ">
                <img
                src="/step3.png"
                alt="step 3"
                className="mx-auto rounded-md shadow-sm"
                />
                <p className="mt-3  text-gray-600">
                URL Copied
                </p>
            </div>

            </div>

          {/* DESKTOP SECTION */}
          <div>
            <div className="bg-gray-100 px-4 py-3 rounded-md">
              <h3 className="font-semibold text-lg text-gray-800">
                Steps to Download from Desktop
              </h3>
            </div>

            <ol className="mt-4 list-decimal pl-6 space-y-2 text-gray-700 text-[16px] leading-7">
              <li>Open the Pinterest website on your browser and select the video, image, or GIF you want to download.</li>
              <li>Copy the Pinterest video URL from the browser</li>
              <li>Paste the URL in the box and press download.</li>
              <li>The video will be available for download.</li>
              <li>Drag the video file from the Downloads folder on your computer to your desired location.</li>
            </ol>

            
          </div>
            <div className="bg-gray-100 px-4 py-3 rounded-md">
              <h3 className="font-semibold text-lg text-gray-800">
                Download  Video
              </h3>
            </div>

             <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700 text-[16px] leading-7">
              <li>Click the "Download" button below the video preview to save the video to your device.</li>
              
              
            </ul>

        </div>
      </div>
      
 </div>
  )
}

export default HowTo