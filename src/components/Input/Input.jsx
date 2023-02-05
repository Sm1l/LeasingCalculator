import React from "react";
import "./input.scss";

const Input = ({ label, id, span, value, handleChange, min, max, handleBlur, isActive }) => {
  return (
    <div className={isActive ? "input" : "input input_disabled"}>
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
      <input
        type="number"
        className="input__input"
        id={id}
        value={parseInt(value)}
        onChange={handleChange}
        min={min}
        max={max}
        onBlur={handleBlur}
        disabled={isActive ? false : true}
      />
      <span className="input__number">{span}</span>
      <input
        type="range"
        className="input__range"
        value={parseInt(value)}
        min={min}
        max={max}
        onChange={handleChange}
        disabled={isActive ? false : true}
      />
    </div>
  );
};

export default Input;
