import React from "react";
import img from '../assets/hero.jpg'
import { Link } from "react-router-dom";
import ComponentHeader from "../components/ComponentHeader";

const blogPosts = [
  {
    id: 1,
    title: "How to improve Problem solving skills",
    date: "May 17, 2015",
    description:
      "It's no secret that the digital industry is booming. From exciting startups to global brands...",
    image: img, // Replace with actual image
  },
  {
    id: 2,
    title: "Effect of competitive programming on your career",
    date: "May 17, 2015",
    description:
      "It's no secret that the digital industry is booming. From exciting startups to global brands...",
    image: img, // Replace with actual image
  },
  {
    id: 3,
    title: "Effect of competitive programming on your career",
    date: "May 17, 2015",
    description:
      "It's no secret that the digital industry is booming. From exciting startups to global brands...",
    image: img, // Replace with actual image
  },
  {
    id: 4,
    title: "Effect of competitive programming on your career",
    date: "May 17, 2015",
    description:
      "It's no secret that the digital industry is booming. From exciting startups to global brands...",
    image: img, // Replace with actual image
  },
];

const categories = ["Images Posts", "Life Style", "Photograph", "Uncategorized"];

const BlogList = () => {
  return (
    <div className="w-full">
      <ComponentHeader title="Blogs" route="Blogs" />
      <div className="w-full lg:w-[85%] mx-auto px-5 lg:px-0">
        <div className="mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Main Blog Posts */}
          <div className="md:col-span-3 space-y-10">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex flex-col md:flex-row gap-6">
                <img src={post.image} alt={post.title} className="w-full md:w-60 rounded-xl object-cover" />
                <div>
                  <h2 className="text-xl font-bold">{post.title}</h2>
                  <p className="text-gray-600 mt-2">{post.description}</p>
                  <Link to={'/blog/' + post.id} className="cursor-pointer inline-block mt-4 border border-orange-500 text-orange-500 px-4 py-1 rounded-full hover:bg-orange-100 transition">
                    Continue Reading
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            {/* Categories */}
            <div>
              <h3 className="font-bold border-b pb-2 mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-700">
                {categories.map((cat, idx) => (
                  <li key={idx} className="hover:text-orange-500 cursor-pointer">{cat}</li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 className="font-bold border-b pb-2 mb-4">Recent Posts</h3>
              {blogPosts.map((post) => (
                <div key={post.id} className="flex items-center gap-4 mb-4">
                  <img src={post.image} alt={post.title} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold leading-snug">{post.title}</p>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogList;