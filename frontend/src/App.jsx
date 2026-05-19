import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Download from "./pages/Download.jsx";
import Faq from "./components/Faq.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Blog from "./pages/Blog.jsx";
import Blog1 from "./pages/Blog/Blog1.jsx";
import Video from "./pages/Video.jsx";
import Blog2 from "./pages/Blog/Blog2.jsx";
import Blog3 from "./pages/Blog/Blog3.jsx";
import HowTo from "./pages/HowTo.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Blog4 from "./pages/Blog/Blog4.jsx";
import Blog5 from "./pages/Blog/Blog5.jsx";
import Blog6 from "./pages/Blog/Blog6.jsx";
import SupportedUrls from "./pages/SupportedUrls.jsx";

function App() {
  return (
    <HashRouter>
      <Navbar/>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/how-to" element={<HowTo />} />
        <Route path="/video-tutorial" element={<Video />} />
        <Route path="/support-url" element={<SupportedUrls />} />
        <Route path="/terms-privacy-policy" element={<PrivacyPolicy />} />




        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/The Digital Handshake: Using Downloaded Content Responsibly" element={<Blog1 />} />
        <Route path="/blog/The Traveler’s Hack: Pinterest for Long Flights and Layovers" element={<Blog2 />} />
        <Route path="/blog/Study Smarter: Using Pinterest Videos for Deep Focus" element={<Blog3 />} />
        <Route path="/blog/On-Site Success: Saving Pinterest DIY Videos for the Job" element={<Blog4 />} />
        <Route path="/blog/Beyond the Download: Building Your Personal Reference Library" element={<Blog5 />} />
        <Route path="/blog/Private Browsing & Pinterest: What Actually Stays Private?" element={<Blog6 />} />


      </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default App;



