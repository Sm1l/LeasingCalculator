import React from "react";
import ResultItem from "../ResultItem/ResultItem";

import "./result.scss";

const Result = ({ sumLeasing, monthPay }) => {
  return (
    <div className="result">
      <ResultItem title={"Сумма договора лизинга"} value={sumLeasing} />
      <ResultItem title={"Ежемесячный платеж от"} value={monthPay} />
    </div>
  );
};

export default Result;
