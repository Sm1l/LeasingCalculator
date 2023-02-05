import React from "react";
import "./resultItem.scss";

const ResultItem = ({ title, value }) => {
  return (
    <div className="result-item">
      <p className="result-item__title">{title}</p>
      <span className="result-item__value">{value} ₽</span>
    </div>
  );
};

export default ResultItem;
