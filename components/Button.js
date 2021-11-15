import React from "react";

const Button = ({ color, text }) => {
  return (
    <button className={`text-white px-4 py-3  rounded-md m-10 ${color}`}>
      {text}
    </button>
  );
};

export default Button;
