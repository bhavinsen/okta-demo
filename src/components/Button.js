import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        className={`${props.className} relative px-7 py-3 overflow-hidden font-medium text-gray-600 bg-transparent border rounded-lg shadow-inner group`}
      >
        <span className={`absolute inset-0 w-full h-full duration-300 opacity-0 group-hover:opacity-100 ${props.hover}`} />
        <span className={`relative transition-colors duration-300 ease group-hover:text-white`}>
          {props.content}
        </span>
      </button>
    </>
  );
};

export default Button;