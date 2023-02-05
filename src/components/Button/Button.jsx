import React from "react";
import "./button.scss";
import "./button__loading.scss";

const Button = ({ isActive }) => {
  //* решение с изменением размера кнопки. В итоге сделал просто через media и width
  // useEffect(() => {
  //   const btnWidth = buttonRef.current.offsetWidth;
  //   const btnHeight = buttonRef.current.offsetHeight;
  //   console.log(btnWidth);
  //   if (!buttonRef.current.disabled) {
  //     buttonRef.current.style.width = `${btnWidth}px`;
  //     buttonRef.current.style.height = `${btnHeight}px`;
  //   }
  // }, [isActive]);
  // const buttonRef = useRef();

  return (
    <div>
      <button
        className={isActive ? "button" : "button button_disabled"}
        disabled={isActive ? false : true}
        // ref={buttonRef}//*
      >
        {isActive ? "Оставить заявку" : "Загрузка..."}
        <span className={isActive ? "button__loading" : "button__loading button__loading_active"}></span>
      </button>
    </div>
  );
};

export default Button;
