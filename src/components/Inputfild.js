import React from "react";

const Inputfild = (props) => {
  return (
    <>
      <div className="sm:w-auto w-full">
        <div className="flex rounded-md shadow-sm sm:w-[300px] w-full">
          <input
            type={props.type}
            className={`${props.className} block flex-1 border rounded-md shadow-inner bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none sm:text-sm sm:leading-6 text-base`}
            placeholder={props.placeholder}
            name={props.name}
            onChange={props.onChange}
          />
        </div>
      </div>
    </>
  );
};

export default Inputfild;