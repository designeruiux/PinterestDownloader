import React from "react";

function ContactUs() {
  return (
    <div className=" bg-[#ecf0f1] flex items-center justify-center px-4 py-10">

      <div className="max-w-xl w-full  p-8 text-center">

        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Contact Us - pintrestdownloader.net
        </h1>

        {/* TEXT */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          If you have any queries or suggestions, please feel free to contact
          us via email. We are always happy to help you.
        </p>

        {/* EMAIL BOX */}
        <div className=" rounded-lg p-4 inline-block">
          <a
            href="mailto:admin@pintrestdownloader.net"
            className=" font-semibold text-lg hover:underline"
          >
            admin@pintrestdownloader.net
          </a>
        </div>

      </div>

    </div>
  );
}

export default ContactUs;