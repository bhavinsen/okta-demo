import React from "react";
import Button from "../Button";
import Inputfild from "../Inputfild";
import { Oktalogo } from "../../assets/Icon";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-screen justify-center items-center bg-[#267ec2] px-3">
        <div className="bg-white px-3 py-7 sm:px-6 rounded-lg md:max-w-2xl">
          <div className="w-20 mx-auto mb-7">
            <Oktalogo color="#000" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 sm:flex-nowrap flex-wrap">
              <Button content="Email Adress" className="w-full hover:border-indigo-500 text-white bg-[#267ec2] border-[#267ec2]" />
              <Inputfild
                type="email"
                placeholder="Enter your Email"
                className="h-[48px] sm:w-[300px] w-full placeholder:text-black border-black focus:border-[#267ec2]"
              />
            </div>
            <div className="flex gap-4 sm:flex-nowrap flex-wrap">
              <Button content="Password" className="w-full hover:border-indigo-500 text-white bg-[#267ec2] border-[#267ec2]" />
              <Inputfild
                type="Password"
                placeholder="Enter your Password"
                className="h-[48px] sm:w-[300px] w-full placeholder:text-black border-black focus:border-[#267ec2]"
              />
            </div>
          <div className="w-full mt-4">
            <button onClick={()=>navigate('/login')} className="flex-none w-full rounded-md hover:border text-black border-[#267ec2] bg-transparent hover:bg-[#267ec2] hover:text-white px-7 py-3 text-base font-semibold shadow-sm border  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whiborder-white duration-200 transition-all ease-in-out">
              Submit
            </button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
