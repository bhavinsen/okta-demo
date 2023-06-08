import { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import Inputfild from "../Inputfild";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    id: 0,
    group: "",
    dropdownValue: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    try {
      const existingDataResponse = await axios.get(
        "http://localhost:3000/data"
      );
      const existingData = existingDataResponse.data;

      const newData = {
        ...formData,
        dropdownValue: formData.dropdownValue,
      };

      const updatedData = [...existingData, newData];

      const response = await axios.post("http://localhost:3000/data", newData);
      if (response.status === 201) {
        setFormData(updatedData);
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="space-y-4 bg-white px-3 py-7 sm:px-6 rounded-lg md:max-w-2xl">
        <div className="flex gap-4 xs:flex-nowrap flex-wrap ">
          <Button content="Group" className="sm:w-[102px] w-full " hover={"bg-black"}  />
          <div className="sm:w-auto w-full">
            <Inputfild
              type="text"
              placeholder="Enter your Group"
              className="h-[48px] sm:w-[300px] w-full"
              onChange={handleInputChange}
              name="group"
            />
          </div>
        </div>
        <div className="flex gap-4 xs:flex-nowrap flex-wrap ">
          <Button content="ID" className="sm:w-[102px] w-full"  hover={"bg-black"} />
          <div className="sm:w-auto w-full">
            <Inputfild
              type="text"
              placeholder="Enter your id"
              className="h-[48px] sm:w-[300px] w-full"
              name="id"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <Dropdown formData={formData} setFormData={setFormData} />
        </div>
        <div className="w-full">
          <button
            onClick={handleSubmit}
            className="flex-none w-full rounded-md hover:border border-indigo-500 bg-transparent hover:bg-indigo-500 hover:text-white px-7 py-3 text-base font-semibold shadow-sm  text-black border  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 duration-200 transition-all ease-in-out"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
