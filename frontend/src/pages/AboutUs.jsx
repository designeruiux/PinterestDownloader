import React from "react";

function AboutUs() {
  return (
    <>


    <div className=" bg-[#ecf0f1] flex items-center justify-center px-4 py-10">

      <div className="max-w-5xl w-full p-8">

  {/* TITLE */}
  <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
    About Us - Klickpin.com
  </h1>

  {/* CONTENT */}
  <div className="text-[16px] text-gray-700 leading-relaxed text-left">

    <p className="mb-5">
      Klickpin.com is a free website that helps users download their
      favorite content from various platforms and save it for offline
      viewing by generating direct links to the content.
    </p>

    <p className="mb-5">
      The content is hosted on the original platform's servers, not ours.
      We do not save content on our servers nor do we keep a history of
      downloaded content. Using Klickpin.com is completely anonymous and
      safe.
    </p>

    <p className="mb-5">
      We run Google Ads on our website to support our servers and keep
      Klickpin.com running. If you want to support us, please disable your
      AdBlocker while using Klickpin.com. We promise to only use safe and
      non-intrusive ads.
    </p>

    <p>
      If you have any queries, feel free to contact us via the link in the
      navigation bar.
    </p>

  </div>

</div>
    </div>
        </>
  );
}

export default AboutUs;