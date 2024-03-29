import React from "react";

const Button = ({ data }) => {
  return (
    <button className="bg-black text-white rounded-lg p-[10px] pr-6 pl-6  w-fit place-self-center font-medium">
      {data}
    </button>
  );
};

export default Button;
