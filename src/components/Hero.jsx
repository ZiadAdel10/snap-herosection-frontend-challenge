import React from "react";
import HeroImage from "../images/hero-desktop.png";
import HeroClients from "../images/Group8.png";

export default function Hero() {
  return (
    <div className="flex items-center">
      <div className="ml-[16.5rem] mr-[12.5rem] flex flex-col gap-[5rem] items-start">
        <h1 className="text-[#151515] text-[8rem] font-[700] leading-[8rem] tracking-[-0.1rem]">
          Make <br />
          remote work
        </h1>
        <p className="text-[#686868] text-[1.8rem] font-[500]">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="bg-[#151515] rounded-[15px] px-[3rem] py-[1.5rem] text-[#FAFAFA] text-[1.8rem] font-[700]">
          Learn More
        </button>
        <img src={HeroClients} alt="Clients" />
      </div>
      <div className="my-[13rem] mr-[13rem] w-[480px] h-[640]">
        <img
          className="w-full"
          src={HeroImage}
          alt="A guy holding a laptom remotely working"
        />
      </div>
    </div>
  );
}
