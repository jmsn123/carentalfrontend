import React from "react";

const blogs = [
  {
    image: "./assets/images/blog-1.jpg",
    title: "Worthy Cyber Monday Fashion From Casmart",
    category: "Fashion",
    date: "31 Mar 2021"
  },
  {
    image: "./assets/images/blog-2.jpg",
    title: "Holiday Home Decoration I’ve Recently Ordered",
    category: "Fashion",
    date: "31 Mar 2021"
  },
  {
    image: "./assets/images/blog-3.jpg",
    title: "Unique Ideas for Fashion You Haven’t Heard Yet",
    category: "Fashion",
    date: "31 Mar 2021"
  }
];

const Blog = () => {
  return (
    <section className="section blog">
      <div className="container">
        <h2 className="h2 section-title">Latest Fashion News</h2>
        <ul className="blog-list">
          {blogs.map((blog, index) => (
            <li key={index}>
              <div className="blog-card">
                <figure className="card-banner">
                  <a href="#">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy"
                      className="w-100"
                    />
                  </a>
                </figure>
                <div className="card-content">
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <ion-icon name="folder-open-outline"></ion-icon>
                      <a href="#" className="card-meta-link">
                        {blog.category}
                      </a>
                    </li>
                    <li className="card-meta-item">
                      <ion-icon name="time-outline"></ion-icon>
                      <a href="#" className="card-meta-link">
                        <time dateTime="2021-03-31">{blog.date}</time>
                      </a>
                    </li>
                  </ul>
                  <h3 className="h3 card-title">
                    <a href="#">{blog.title}</a>
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
