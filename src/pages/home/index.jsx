import React from "react";
import { Link } from "react-router-dom";
import Donate from "../../components/donate";
import DonateButton from "../../components/donate";

const Homepage = () => {
  return (
    <div className=" h-screen relative  w-full ">
      <div className="w-full h-full absolute z-20 bg-black/20  px-14 py-5">
        {/* navbar is here  👋 */}
        <div className="flex items-center px-7 justify-between  h-15 rounded-2xl bg-[#3A3A3A66] backdrop-blur-[1px]">
          <img src="/images/logo.svg" alt="" />
          <div className="flex items-center justify-end gap-x-4">
            <span className="text-lg  text-white ">Contact Us</span>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <img src="/icons/user.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* main content are here  😶‍🌫️ */}
      <div className="absolute top-0 flex flex-col  max-w-xl  bottom-0 my-auto 0 z-30 h-fit left-14">
        <h1 className="text-[56px] leading-19 font-semibold text-white">
          The Day the Sky Fell: <br />
          Unraveling the <br />
          Catastrophe of 2025
        </h1>
        <p className="text-[19px] mt-3  text-white  font-light ">
          When nature’s fury collided with human fragility, the world was left
          to pick up the pieces—here’s what happened, why it matters, and what
          comes next.
        </p>
        <Link
          to={"/donate"}
          className="bg-[#FFFFFF33] w-fit flex items-center justify-center gap-x-3  mt-7 text-white h-[50px] rounded-2xl px-5"
        >
          <span>View More</span>
          <img src="/icons/arrow.svg" alt="" className="w-[23px]" />
        </Link>
      </div>
      {/* donate now button 💰  */}
      <DonateButton className={"z-50 absolute bottom-14 right-14"} />
      <img
        src="/images/home.jpeg"
        alt=""
        className="w-full h-full object-top object-cover"
      />
    </div>
  );
};

export default Homepage;
