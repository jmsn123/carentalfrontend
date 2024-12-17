import React, { useEffect, useState } from "react";

import client from "../contenful/contentful";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await client.getEntries({ content_type: "products" });
        const items = response.items.map((item) => ({
          id: item.sys.id,
          ...item.fields
        }));
        setProducts(items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <section className="section product">
      <div className="container">
        <h2 className="h2 section-title">Products of the Week</h2>
        <ul className="filter-list">
          <li>
            <button className="filter-btn active">Best Seller</button>
          </li>
          <li>
            <button className="filter-btn">Hot Collection</button>
          </li>
          <li>
            <button className="filter-btn">Trendy</button>
          </li>
          <li>
            <button className="filter-btn">New Arrival</button>
          </li>
        </ul>
        <ul className="product-list">
          {products.map((product, index) => (
            <li key={index}>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="#">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      className="w-100"
                    />
                  </a>
                  {product.badge && (
                    <div className="card-badge">{product.badge}</div>
                  )}
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="#">{product.productTitle}</a>
                  </h3>
                  <div className="card-price">
                    <data value={product.price}>{product.price}</data>
                    {product.oldPrice && <data>{product.oldPrice}</data>}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button className="btn btn-outline">View All Products</button>
      </div>
    </section>
  );
};

export default Product;
