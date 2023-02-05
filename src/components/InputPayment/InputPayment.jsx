import React from "react";
import "./inputPayment.scss";

const Input = ({ label, id, span, value, handleChange, min, max, handleBlur, firstPay, isActive }) => {
  return (
    <div className={isActive ? "input" : "input input_disabled"}>
      <label className="input-payment__label" htmlFor={id}>
        {label}
      </label>
      <input type="number" className="input-payment__input" disabled value={firstPay} />

      <input
        className="input-payment__number"
        type="number"
        id={id}
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        onBlur={handleBlur}
        disabled={isActive ? false : true}
      />
      <span className="input-payment__number input-payment__number_span">{span}</span>
      <input
        type="range"
        className="input-payment__range"
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
        disabled={isActive ? false : true}
      />
    </div>
  );
};

export default Input;
