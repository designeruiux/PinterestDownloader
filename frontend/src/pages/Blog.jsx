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
    {
    title: "Offline Inspiration: Creating Mood Boards Without Internet",
    desc: "Save Pinterest videos and ideas offline to build creative mood boards anywhere—perfect for designers, students, and creators on the go.",
    path: "/blog/Offline Inspiration: Creating Mood Boards Without Internet",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72"
  },
  {
    title: "Weekend Projects Made Easy with Saved Pinterest Tutorials",
    desc: "Download Pinterest tutorials before the weekend and enjoy smooth, distraction-free DIY projects without buffering or ads.",
    path: "/blog/Weekend Projects Made Easy with Saved Pinterest Tutorials",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952"
  },
  {
    title: "Why Offline Video Learning Beats Endless Scrolling",
    desc: "Turn Pinterest videos into focused offline learning sessions by avoiding distractions, recommendations, and constant notifications.",
    path: "/blog/Why Offline Video Learning Beats Endless Scrolling",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
  },
  {
    title: "Creative Workflow Tips for Pinterest Content Collectors",
    desc: "Organize downloaded Pinterest videos efficiently with folders, categories, and quick-access systems to boost your creative workflow.",
    path: "/blog/Creative Workflow Tips for Pinterest Content Collectors",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }
 
  ];

  return (
    <div className="bg-[#ecf0f1] px-4 py-10">

      <h1 className="text-center text-4xl font-bold mb-7">
        pintrestdownloader.net Blog
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