import React from 'react'

function Video() {
  return (
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
  )
}

export default Video