import React from "react";

import Input from "../Input/Input";
import InputPayment from "../InputPayment/InputPayment";

import "./inputContainer.scss";

const InputContainer = ({ price, setPrice, payment, setPayment, period, setPeriod, firstPay, isActive }) => {
  //* set число (не помогает, если изменение через стрелки!!!)
  const handleChangePrice = (e) => {
    setPrice(Number(e.target.value));
    // console.log("price", typeof e.target.value);
  };

  const handleBlurPrice = (e) => {
    if (e.target.value > 6000000) {
      e.target.value = 6000000;
    } else if (e.target.value < 1000000) {
      e.target.value = 1000000;
    }
    setPrice(e.target.value);
  };

  const handleChangePayment = (e) => {
    setPayment(+e.target.value);
    // console.log("value", typeof e.target.value);
  };

  const handleBlurPayment = (e) => {
    if (e.target.value > 60) {
      e.target.value = 60;
    } else if (e.target.value < 10) {
      e.target.value = 10;
    }
    setPayment(e.target.value);
  };

  const handleChangePeriod = (e) => {
    setPeriod(+e.target.value);
    // console.log("period", typeof e.target.value);
  };

  const handleBlurPeriod = (e) => {
    if (e.target.value > 60) {
      e.target.value = 60;
    } else if (e.target.value < 1) {
      e.target.value = 1;
    }
    setPeriod(e.target.value);
  };

  return (
    <div className="input-container">
      <Input
        label={"Стоимость автомобиля"}
        id={1}
        span={"₽"}
        value={price}
        handleChange={handleChangePrice}
        min={1000000}
        max={6000000}
        handleBlur={handleBlurPrice}
        isActive={isActive}
      />

      <InputPayment
        label={"Первоначальный взнос"}
        id={2}
        span={"%"}
        value={payment}
        handleChange={handleChangePayment}
        min={10}
        max={60}
        handleBlur={handleBlurPayment}
        firstPay={firstPay}
        isActive={isActive}
      />
      <Input
        label={"Срок лизинга"}
        id={3}
        span={"мес."}
        value={period}
        handleChange={handleChangePeriod}
        min={1}
        max={60}
        handleBlur={handleBlurPeriod}
        isActive={isActive}
      />
    </div>
  );
};

export default InputContainer;
