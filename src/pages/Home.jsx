import React from "react";

const Hero = React.lazy(() => import("../components/Hero"));
const Service = React.lazy(() => import("../components/Service"));
const Category = React.lazy(() => import("../components/Category"));
const Product = React.lazy(() => import("../components/Product"));
const Blog = React.lazy(() => import("../components/Blog"));
const Newsletter = React.lazy(() => import("../components/Newsletter"));
function Home() {
  return (
    <>
      <Hero />
      <Service />
      <Category />
      <Product />
      <Blog />
      <Newsletter />
    </>
  );
}

export default Home;
