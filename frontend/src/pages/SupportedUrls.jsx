import React from "react";

function SupportedUrls() {
  return (
    <>
      <div className="bg-[#ecf0f1] flex items-center justify-center px-4 py-10">
        <div className="max-w-5xl w-full p-8">

          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
            KlickPin.com Supported URL&apos;s
          </h1>

          {/* CONTENT */}
          <div className="text-[16px] text-gray-700 leading-relaxed text-left">

            <p className="mb-5 text-center">
              If you have any quries or suggesstions and then please message
              us through the contact mail.
            </p>

            <div className="bg-white rounded-xl p-6 shadow-md space-y-4 break-all">

              <p>
                https://www.pinterest.com/pin/795377984215165340/
              </p>

              <p>
                https://pin.it/60m8aXr85
              </p>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default SupportedUrls;