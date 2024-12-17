import React from "react";

const Overlay = ({ active, onClick }) => {
  return (
    <div
      className={`overlay ${active ? "active" : ""}`}
      data-overlay
      onClick={onClick}
    ></div>
  );
};

export default Overlay;
