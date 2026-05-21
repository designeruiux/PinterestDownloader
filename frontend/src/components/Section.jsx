import React from "react";

function Section() {
  return (
    <>
      <div className="w-full flex justify-center px-4 mt-16">

      <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">

        {/* HEADER */}
        <div className="bg-gray-100 border-b border-gray-200 px-6 py-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            How To Download Pinterest Videos using pintrestdownloader.net?
          </h2>
        </div>

        <div className="p-6 md:p-8 space-y-8">

          {/* DESCRIPTION */}
          <p className="text-[16px] md:text-base leading-7 text-gray-700">
            pintrestdownloader.net is the <b>Best Pinterest video downloader</b> online.
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
              <li>Paste the video URL in the Download Input Box on the pintrestdownloader.net website, and tap on the Download button.</li>
              <li>You will see a preview of your download file. Tap on the Download button just below it.</li>
              <li>The Pinterest video, image, or GIF will be downloaded to your device.</li>
            </ol>
          </div>

          {/* DISCOVER BOX */}
          <div className="rounded-md overflow-hidden">

            <div className="mt-1 w-full  bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">

        <h2 className="px-6 py-4 text-lg font-semibold text-gray-800 border-b border-gray-200 bg-gray-50">
          Discover more
        </h2>

        <div className="divide-y divide-gray-200">

          <div className="flex items-center justify-between px-6 py-2 discover-item">
            <span>Digital File Storage</span>
            <span className="arrow">›</span>
          </div>

          <div className="flex items-center justify-between px-6 py-2 discover-item">
            <span>TV & Video</span>
            <span className="arrow">›</span>
          </div>

          <div className="flex items-center justify-between px-6 py-2 discover-item">
            <span>Website Download Feature</span>
            <span className="arrow">›</span>
          </div>

        </div>

            </div>
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

        </div>
      </div>
    </div>

 {/* pintrestdownloader.net: Supported Video Quality & Formats section */}
<div className="w-full flex justify-center px-4 mt-10">

  <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">

    {/* HEADER */}
    <div className="bg-gray-100 border-b border-gray-200  px-6 py-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        pintrestdownloader.net: Supported Video Quality & Formats
      </h2>
    </div>

    <div className="p-6 md:p-8 space-y-6">

      {/* DESCRIPTION */}
      <p className="text-[16px] leading-7 text-gray-700">
        One of the best things about pintrestdownloader.net is the choice of download quality.
        Whether you’re on mobile data or Wi-Fi, you can choose the right format and resolution.
      </p>

      {/* DOT LIST SECTION */}
      <div className="text-gray-700 text-[16px] leading-7">

        <p className="font-semibold mb-2">We support:</p>

        <ul className="list-disc pl-6 space-y-2">

          <li>HD (720p and 1080p) for clear viewing</li>

          <li>2K and 4K Pinterest video downloads if available</li>

          <li>MP4 format for universal compatibility</li>

          <li>MP3 conversion for those who just want the audio</li>

        </ul>

      </div>

      {/* EXTRA PARAGRAPH */}
      <p className="text-[16px] leading-7 text-gray-700">
        You can even use pintrestdownloader.net as a Pinterest to MP4 or Pinterest to MP3 converter,
        ideal for podcast-style learning or saving music clips.
      </p>

    </div>
  </div>
</div>


{/* Our Network Sites: section */}
<div className="w-full flex justify-center px-4 mt-10">

  <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">

    {/* HEADER */}
    <div className="bg-gray-100 border-b border-gray-200   px-6 py-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Our Network Sites:
      </h2>
    </div>

    <div className="p-6 md:p-8 space-y-6">

      {/* DESCRIPTION */}
    

      {/* DOT LIST SECTION */}
      <div className="text-gray-700 text-[16px] leading-7">

      

        <ul className="list-disc pl-6 space-y-2">

          <li>Klickaud- SoundCloud to Mp3 Converter</li>

          <li>Forhub SoundCloud Downloader</li>

          <li>Image Compressor Online from IMGCentury</li>

          <li>PDF Compressor from IMGCentury</li>

        </ul>

      </div>

    

    </div>
  </div>
</div>


{/* Does pintrestdownloader.net Work on Mobile? section */}
<div className="w-full flex justify-center px-4 mt-10">

  <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">

    {/* HEADER */}
    <div className="bg-gray-100 border-b border-gray-200 px-6 py-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Does pintrestdownloader.net Work on Mobile?
      </h2>
    </div>

    <div className="p-6 md:p-8 space-y-6">

      {/* DESCRIPTION */}
      <p className="text-[16px] leading-7 text-gray-700">
        Absolutely. pintrestdownloader.net supports multiple devices so you can download Pinterest videos anytime, anywhere without restrictions.
      </p>

      {/* DEVICE LIST */}
      <div className="text-gray-700 text-[16px] leading-7">

        <ul className="list-disc pl-6 space-y-2">

          <li>
            <b>Android users</b> (you can even install the APK)
          </li>

          <li>
            <b>iOS / iPhone users</b> – including saving directly to camera roll
          </li>

          <li>
            <b>Desktop users</b> (great for those who edit or manage content)
          </li>

        </ul>

      </div>

      {/* EXTRA TEXT */}
      <p className="text-[16px] leading-7 text-gray-700">
        Whether you're searching for a Pinterest video downloader app, a Chrome extension,
        or just a fast website — pintrestdownloader.net works from any browser.
      </p>

      {/* USER QUOTE BOX */}
      <div className="bg-gray-50 border border-gray-200 p-4 rounded-md italic text-gray-700 text-[15px] leading-6">
        “I saved a Pinterest cooking video in HD using pintrestdownloader.net, now I don’t need to open the app every time I want to watch it.” – Verified User
      </div>

    </div>
  </div>
</div>


{/* What Else Can You Download? section */}
<div className="w-full flex justify-center px-4 mt-10">

  <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">

    {/* HEADER */}
    <div className="bg-gray-100 border-b border-gray-200 px-6 py-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        What Else Can You Download?
      </h2>
    </div>

    <div className="p-6 md:p-8 space-y-6">

      {/* DESCRIPTION */}
      <p className="text-[16px] leading-7 text-gray-700">
        Aside from standard Pinterest videos, pintrestdownloader.net also helps you download a wide range of content in just one click.
      </p>

      {/* LIST */}
      <div className="text-gray-700 text-[16px] leading-7">

        <ul className="list-disc pl-6 space-y-2">

          <li>
            <b>Pinterest reels</b> and short videos
          </li>

          <li>
            <b>GIFs</b> posted as animated pins
          </li>

          <li>
            <b>Idea Pins</b> (multi-step tutorials or slideshows)
          </li>

          <li>
            <b>Audio tracks</b> from certain Pinterest clips
          </li>

        </ul>

      </div>

      {/* EXTRA TEXT */}
      <p className="text-[16px] leading-7 text-gray-700">
        You can even save content in high resolution - like Pinterest 1080p videos or 4K quality, if available.
      </p>

    </div>
  </div>
</div>


{/*  Is pintrestdownloader.net Safe to Use? section */}
<div className="w-full flex justify-center px-4 mt-10">

  <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">

    {/* HEADER */}
    <div className="bg-gray-100 border-b border-gray-200 px-6 py-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Is pintrestdownloader.net Safe to Use?
      </h2>
    </div>

    <div className="p-6 md:p-8 space-y-6">

      {/* DESCRIPTION */}
      <p className="text-[16px] leading-7 text-gray-700">
       Yes, pintrestdownloader.net is completely safe.
      </p>

      {/* LIST */}
      <div className="text-gray-700 text-[16px] leading-7">

        <ul className="list-disc pl-6 space-y-2">

          <li>
            It doesn’t ask for login or Pinterest credentials
          </li>

          <li>
            It doesn’t track you or show pop-up ads
          </li>

          <li>
            It works directly through your browser
          </li>

      

        </ul>

      </div>
          {/* DISCOVER BOX */}
          <div className="rounded-md overflow-hidden">

            <div className="mt-1 w-full  bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">

        <h2 className="px-6 py-4 text-lg font-semibold text-gray-800 border-b border-gray-200  bg-gray-50">
          Discover more
        </h2>

        <div className="divide-y divide-gray-300">

          <div className="flex items-center justify-between px-6 py-2 discover-item">
            <span>Social Media Downloader</span>
            <span className="arrow">›</span>
          </div>

          <div className="flex items-center justify-between px-6 py-2 discover-item">
            <span>web browser</span>
            <span className="arrow">›</span>
          </div>

          <div className="flex items-center justify-between px-6 py-2 discover-item">
            <span>Download Input Box</span>
            <span className="arrow">›</span>
          </div>

        </div>

            </div>
          </div>

      {/* EXTRA TEXT */}
      <p className="text-[16px] mb-2 text-gray-700">
       We believe in privacy-first tools that are easy to use and respectful of user data.
           </p>
        <p>
    ✅ pintrestdownloader.net.com is Verified Safe: Google Safe Browsing | Norton Safe Web | Sucuri Scanner
           </p>

   

    </div>
  </div>
</div>


{/* Video Tutorial: How to Use pintrestdownloader.net Pinterest Downloader?  section */}
<div className="w-full flex justify-center px-4 mt-10">

  <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">

    {/* HEADER */}
    <div className="bg-gray-100 border-b border-gray-200 px-6 py-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
      Video Tutorial: How to Use pintrestdownloader.net Pinterest Downloader?
      </h2>
    </div>

    <div className="p-6 md:p-8 space-y-6">

  

  {/* YOUTUBE VIDEO */}
  <div className="w-full flex justify-center">

    <div className="w-full max-w-5xl aspect-video rounded-lg overflow-hidden shadow-md border">

      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/mOsuZ0-H_xM"
        title="pintrestdownloader.net Demo Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

    </div>

  </div>

  {/* DESCRIPTION */}
  <p className="text-[16px] text-center text-gray-700 leading-7">
    Watch this quick demo to understand how pintrestdownloader.net downloads Pinterest videos,
    images, and GIFs instantly in HD quality.
  </p>

</div>
  </div>
</div>

    </>

  
  );
}

export default Section;