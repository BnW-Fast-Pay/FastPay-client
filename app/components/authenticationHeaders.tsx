/** @format */

import { FC } from "react";

interface AuthenticationHeadersProps {
  image?: string;
  headerTitle: string;
  bodyTitle: string;
}

const AuthenticationHeaders: FC<AuthenticationHeadersProps> = ({
  image = "BNW-logo.svg",
  headerTitle,
  bodyTitle,
}) => {
  return (
    <div className="flex flex-col items-center  pt-[4rem] ">
      <div className="flex flex-col items-center">
        <img src={`/${image}`} alt="FastPay Logo" className="w-12 h-12 mb-4" />
        <h1 className=" text-center text-[30px] text-[--heading] font-bold mb-2">
          {headerTitle}
        </h1>
        <p className="text-[--body-text]">{bodyTitle}</p>
      </div>
    </div>
  );
};

export default AuthenticationHeaders;
