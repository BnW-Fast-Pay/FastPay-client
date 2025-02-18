/** @format */

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type StatusProps = {
  text: string;
  icon: string;
  iconBg: string;
  slideColor: string;
};

const Status: React.FC<StatusProps> = ({ text, icon, iconBg, slideColor }) => {
  const [showStatus, setShowStatus] = useState("flex");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowStatus("hidden");
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`h-[--input-height] bg-white min-w-[35vw] absolute shadow-lg rounded-[--radius-sm] flex flex-col gap-2 justify-between items-center px-2 pt-3 z-50 top-0 left-1/2 transform -translate-x-1/2 ${showStatus}`}
    >
      <div className="flex justify-between w-full  items-center gap-3 ">
        <div
          className={`rounded-[--radius-sm] h-10 w-10 ${iconBg} flex justify-center items-center text-white font-bold text-xl`}
        >
          <p>{icon}</p>
        </div>
        <p className="text-[--error] font-medium">{text}</p>
        <div
          className={`h-7 w-7 flex justify-center items-center rounded-full bg-[#E5E5E5] font-bold text-xl text-[--black] cursor-pointer `}
          onClick={() => setShowStatus("hidden")}
        >
          <p>x</p>
        </div>
      </div>
      <div className=" bg-[#CBD5E1] h-[0.4rem] w-[97%] rounded-[--radius-sm]">
        <motion.div
          className={`${slideColor} h-[0.4rem] w-[90%] rounded-[--radius-sm]`}
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          transition={{ duration: 5 }}
        />
      </div>
    </div>
  );
};

export default Status;
