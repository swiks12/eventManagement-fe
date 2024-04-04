import React from "react";

const Button = ({ data,type="button",onClick}) => {
  return (
    <button className="bg-black text-white rounded-lg p-[10px] pr-6 pl-6  w-fit place-self-center font-medium " type={type}
    onClick={onClick}>
      {data}
    </button>
  );
};

export default Button;
