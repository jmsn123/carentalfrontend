import React, { useEffect, useState } from "react";

import client from "../contenful/contentful";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await client.getEntries({
          content_type: "categories"
        });
        const items = response.items.map((item) => ({
          id: item.sys.id,
          ...item.fields
        }));
        setCategories(items);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <section className="section category">
      <div className="container">
        <ul className="category-list">
          {categories.map((category, index) => (
            <li className="category-item" key={index}>
              <figure className="category-banner">
                <img
                  src={category.image}
                  alt={category.label}
                  loading="lazy"
                  className="w-100"
                />
              </figure>
              <a href="#" className="btn btn-secondary">
                {category.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Category;
