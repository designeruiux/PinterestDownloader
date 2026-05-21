import { Link } from "react-router-dom";
function Footer() {
  return (
    <>

    <footer className="w-full bg-[#2f3640] text-white mt-10">

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* TOP LINKS */}
        <div className="text-center text-[15px] text-white leading-6 flex flex-wrap justify-center gap-x-2 gap-y-1">

        <span>© 2026 Copyright</span>
        <span>|</span>

       

        <span>Pinterest Downloader</span>
        <span>|</span>

        <span>Youtube Thumbnail Grabber</span>

        <span>|</span>

        <Link to="/support-url" className="hover:underline">
          Supported URL's
        </Link>
    
        <span>|</span>

        <Link to="/terms-privacy-policy" className="hover:underline">
          Terms
        </Link>
 
        <span>|</span>

          <Link to="/about-us" className="hover:underline">
          About Us
        </Link>

        <span>|</span>

        <Link to="/contact-us" className="hover:underline">
          Contact Us
        </Link>

       

        </div>

        {/* DISCLAIMER */}
        <p className="text-center text-[15px] text-white mt-4 leading-5">
          pintrestdownloader.net is an independent platform and is not affiliated, associated,
          authorized, endorsed by, or in any way officially connected with Pinterest.com.
        </p>

        {/* SOCIAL */}
        <div className="mt-6 flex flex-col items-center">

          <p className="text-[15px]  mb-3">Follow us on:</p>

        <div className="flex gap-5">

        <a
            href="#"
            className="w-15 h-15 flex items-center justify-center"
        >
            <img src="/icons/twitter.svg" alt="Twitter" className="" />
        </a>

        <a
            href="#"
            className="w-15 h-15 flex items-center justify-center "
        >
            <img src="/icons/youtube.svg" alt="YouTube" className="" />
        </a>

        <a
            href="#"
            className="w-15 h-15 flex items-center justify-center "
        >
            <img src="/icons/pinterest.svg" alt="Pinterest" className="" />
        </a>

        <a
            href="#"
            className="w-15 h-15 flex items-center justify-center "
        >
            <img src="/icons/facebook.svg" alt="Facebook" className="" />
        </a>

        </div>

        </div>

      </div>

    </footer>

 
         

              </>
  );
}

export default Footer;