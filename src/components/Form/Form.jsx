import React, { useMemo, useState } from "react";
// import axios from "axios";

import "./form.scss";
import InputContainer from "../InputContainer/InputContainer";
import ResultContainer from "../ResultContainer/ResultContainer";

const Form = () => {
  const [price, setPrice] = useState(3300000);
  // console.log(price);
  const [payment, setPayment] = useState(13);
  // console.log(payment);
  const [period, setPeriod] = useState(60);
  // console.log(period);

  const [isActive, setIsActive] = useState(true);

  //*вместо useState и useEffect-> useMemo

  const firstPay = useMemo(() => {
    return Math.ceil(price * payment * 0.01);
  }, [price, payment]);

  const monthPay = useMemo(() => {
    return Math.ceil(((price - firstPay) * (0.035 * Math.pow(1 + 0.035, period))) / (Math.pow(1 + 0.035, period) - 1));
  }, [price, firstPay, period]);

  const sumLeasing = useMemo(() => {
    return Math.ceil(firstPay + period * monthPay);
  }, [firstPay, period, monthPay]);

  //*разбитие числа на разряды (приходится приводить к строке)
  const numberWithSpaces = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  const monthPayWithSpaces = numberWithSpaces(monthPay);
  const sumLeasingWithSpaces = numberWithSpaces(sumLeasing);
  //*--------------------

  const formRequest = () => {
    // console.log("price", typeof price); //* ok через set (не помогает, если менять через стрелки)
    // console.log("firstPay", typeof firstPay); //*ok
    // console.log("payment", typeof payment); //* ok через set (не помогает, если менять через стрелки)
    // console.log("period", typeof period); //* ok через set (не помогает, если менять через стрелки)
    // console.log(typeof sumLeasing); //*ok
    // console.log(typeof monthPay); //*ok

    const newPost = {
      car_coast: Number(price),
      initail_payment: firstPay,
      initail_payment_percent: Number(payment),
      lease_term: Number(period),
      total_sum: sumLeasing,
      monthly_payment_from: monthPay,
    };
    console.log(JSON.stringify(newPost));

    fetch("https://hookb.in/eK160jgYJ6UlaRPldJ1P", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(" Кажется, что-то пошло не так!");
        }
        return response.json();
      })
      .then((data) => console.log(data))

      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setIsActive(true);
      });
    //todo axios
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsActive(false);
    formRequest();
  };

  return (
    <form action="" className="form" method="GET" autoComplete="false" onSubmit={handleSubmitForm}>
      <InputContainer
        price={price}
        setPrice={setPrice}
        payment={payment}
        setPayment={setPayment}
        period={period}
        setPeriod={setPeriod}
        firstPay={firstPay}
        isActive={isActive}
      />
      <ResultContainer sumLeasing={sumLeasingWithSpaces} monthPay={monthPayWithSpaces} isActive={isActive} />
    </form>
  );
};

export default Form;
