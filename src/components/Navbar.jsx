import React, { useState } from "react";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { FcTodoList, FcCalendar, FcClock } from "react-icons/fc";
import { AiFillBell } from "react-icons/ai";

export default function Navbar({ navigation }) {
  const navigationTitles = navigation;
  {
  }
  // onClick={setDropdown(!dropdown)}
  const lists = navigationTitles.map((title, index) => {
    const [dropdown, setDropdown] = useState(false);
    return (
      <div>
        {title === "Features" || title === "Company" ? (
          <li
            className="gap-[0.9rem] flex items-center cursor-pointer"
            key={index}
            onClick={() => setDropdown(!dropdown)}
          >
            {title}
            {dropdown ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
          </li>
        ) : (
          <li
            className="gap-[0.9rem] flex items-center cursor-pointer"
            key={index}
            onClick={() => setDropdown(!dropdown)}
          >
            {title}
          </li>
        )}
        {dropdown && title === "Features" ? (
          <div className="bg-white drop-shadow-xl fixed p-[2.4rem] rounded-[10px] flex flex-col gap-[1.6rem] translate-x-[-6rem] m-[0.3rem]">
            <li className="gap-[0.9rem] flex items-center text-[1.4rem] font-[500] cursor-pointer">
              <FcTodoList className="text-3xl" />
              Todo List
            </li>
            <li className="gap-[0.9rem] flex items-center text-[1.4rem] font-[500] cursor-pointer">
              <FcCalendar className="text-3xl" />
              Calendar
            </li>
            <li className="gap-[0.9rem] flex items-center text-[1.4rem] font-[500] cursor-pointer">
              <AiFillBell className="text-[#EDD556] text-3xl" />
              Reminders
            </li>
            <li className="gap-[0.9rem] flex items-center text-[1.4rem] font-[500] cursor-pointer">
              <FcClock className="text-3xl" />
              Planning
            </li>
          </div>
        ) : null}
        {dropdown && title === "Company" ? (
          <div className="bg-white drop-shadow-xl fixed p-[2.4rem] rounded-[10px] flex flex-col gap-[1.6rem] translate-x-[-3rem] m-[1.7rem]">
            <li className="text-[1.4rem] font-[500] cursor-pointer">History</li>
            <li className="text-[1.4rem] font-[500] cursor-pointer">
              Calendar
            </li>
            <li className="text-[1.4rem] font-[500] cursor-pointer">
              Reminders
            </li>
          </div>
        ) : null}
      </div>
    );
  });

  return (
    <div
      className={`flex justify-between my-[3.2rem] mx-[4.1rem] font-epilogue text-black top-0 sticky z-10 scroll:bg-white`}
    >
      <nav className="flex items-center gap-[6.2rem]">
        <h1 className="font-[700] text-5xl">snap</h1>
        <ul className="flex text-[#686868] text-[1.4rem] gap-[5.7rem] font-[500]">
          {lists}
        </ul>
      </nav>
      <div className="flex gap-[4rem] text-[1.4rem] font-[500] text-[#686868]">
        <button>Login</button>
        <button className="border rounded-[15px] px-[2.3rem] py-[1.3rem]">
          Register
        </button>
      </div>
    </div>
  );
}
