import React from "react";
import Result from "../Result/Result";

import "./resultContainer.scss";
import Button from "../Button/Button";

const ResultContainer = ({ sumLeasing, monthPay, isActive }) => {
  return (
    <div className="result-container">
      <Result sumLeasing={sumLeasing} monthPay={monthPay} />
      <Button isActive={isActive} />
    </div>
  );
};

export default ResultContainer;
