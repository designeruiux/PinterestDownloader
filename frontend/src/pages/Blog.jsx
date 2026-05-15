import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  const posts = [
    {
      title: "The Digital Handshake: Using Downloaded Content Responsibly",
      desc: "Download Pinterest videos for personal reference, give credit to creators, and support the platform ecosystem—so  at…",
      path: "/blog/The Digital Handshake: Using Downloaded Content Responsibly",
       image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      
    },
    {
      title: "The Traveler’s Hack: Pinterest for Long Flights and Layovers",
      desc: "Download Pinterest videos before long flights or layovers so you can watch travel tips, short DIY ideas, and destination guides even without Wi‑Fi.",
      path: "/blog/The Traveler’s Hack: Pinterest for Long Flights and Layovers",
      image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b"
    },
    {
      title: "Study Smarter: Using Pinterest Videos for Deep Focus",
      desc: "Download study videos from Pinterest to avoid distractions, learn with offline repetition, and build a focused visual syllabus for exams and projects.",
      path: "/blog/Study Smarter: Using Pinterest Videos for Deep Focus",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0"
    },
    {
      title: "On-Site Success: Saving Pinterest DIY Videos for the Job",
      desc: "Download Pinterest DIY tutorials before you start. Avoid Wi‑Fi dead zones, scrub and loop steps precisely, and build an offline ...",
      path: "/blog/On-Site Success: Saving Pinterest DIY Videos for the Job",
       image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
    },
      {
      title: "Beyond the Download: Building Your Personal Reference Library",
      desc: "Organize Pinterest video downloads into a personal reference library with smart folders, five‑second file naming, and distraction‑free offline learning.",
      path: "/blog/Beyond the Download: Building Your Personal Reference Library",
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32"
    },
      {
      title: "Private Browsing & Pinterest: What Actually Stays Private?",
      desc: "Does Private/Incognito mode keep Pinterest video downloads private? Learn what’s hidden, what’s saved, and how to avoid disappearing ...",
      path: "/blog/Private Browsing & Pinterest: What Actually Stays Private?",
      image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
    },
 
  ];

  return (
    <div className="bg-[#ecf0f1] px-4 py-10">

      <h1 className="text-center text-4xl font-bold mb-7">
        Klickpin Blog
      </h1>
    
 <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <Link
            key={i}
            to={post.path}
            className="block bg-white rounded-xl shadow-md overflow-hidden"
          >
            
            {/* IMAGE */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-44 object-cover"
            />

            {/* CONTENT */}
            <div className="p-5">
              <h2 className="text-lg font-bold">{post.title}</h2>

              <p className="text-gray-600 mt-2 text-sm">
                {post.desc}
              </p>

              <span className="inline-block mt-4 text-blue-600 font-semibold">
                Read Article →
              </span>
            </div>

          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;