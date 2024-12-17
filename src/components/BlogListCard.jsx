import React from "react";

function BlogPostCard({ blog }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{blog.title}</h2>
      <p style={styles.date}>
        <em>{new Date(blog.date).toLocaleDateString()}</em>
      </p>
      <p style={styles.content}>{blog.content}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
  },
  title: {
    marginBottom: "8px"
  },
  date: {
    color: "#888",
    fontSize: "0.9em"
  },
  content: {
    fontSize: "1em",
    lineHeight: "1.5"
  }
};

export default BlogPostCard;
