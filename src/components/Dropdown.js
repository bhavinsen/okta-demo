import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaAngleUp } from "react-icons/fa";

const data = [
  { id: 1, name: "Select" },
  { id: 2, name: "ADP" },
  { id: 3, name: "EN" },
  { id: 4, name: "PS" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dropdown = ({ formData, setFormData }) => {
  console.log("🚀 ~ file: Dropdown.js:105 ~ Dropdown ~ formData:", formData)
  const [selected, setSelected] = useState(data[0]);

  const handleSelect = (selectedItem) => {
    setSelected(selectedItem);
    setFormData({dropdownValue: selectedItem.name, group: formData.group, id: formData.id}); 
  };

  return (
    <>
      <Listbox value={selected} name="dropdownValue" onChange={handleSelect}>
        {({ open }) => (
          <>
            <div className="relative">
              <Listbox.Button
                className="flex justify-between flex-1 border rounded-md shadow-inner bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none sm:text-sm sm:leading-6 w-full pr-3 relative h-[48px] items-center"
              >
                <span className="block text-base">{selected.name}</span>
                <FaAngleUp
                  className={`${
                    !open === true ? "rotate-180" : null
                  } absolute top-1/2 -translate-y-1/2 right-4 text-lg`}
                />
              </Listbox.Button>
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {data.map((item) => (
                    <Listbox.Option
                      key={item.id}
                      className={({ active }) =>
                        classNames(
                          active ? "bg-gray-100 text-black" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9 text-base"
                        )
                      }
                      value={item}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            {item.name}
                          </span>
                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            ></span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </>
  );
};

export default Dropdown;
