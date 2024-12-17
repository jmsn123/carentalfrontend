import React, { useEffect, useState } from "react";

import BlogPostCard from "./BlogPostCard";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Simulated data (Replace this with an API call to your backend)
    const mockBlogs = [
      {
        id: 1,
        title: "Welcome to Our Car Rental!",
        date: "2024-06-01",
        content: "Discover our best car rental services today!"
      },
      {
        id: 2,
        title: "Top 5 Cars for Long Trips",
        date: "2024-06-05",
        content: "We recommend these cars for comfort and reliability."
      }
    ];
    setBlogs(mockBlogs);
  }, []);

  return (
    <div>
      <h1>Latest Blog Posts</h1>
      <div>
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogPostCard key={blog.id} blog={blog} />)
        ) : (
          <p>No blog posts available</p>
        )}
      </div>
    </div>
  );
}

export default BlogList;
