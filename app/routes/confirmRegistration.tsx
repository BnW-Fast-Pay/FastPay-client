/** @format */
import AuthenticationHeaders from "../components/authenticationHeaders";
import TextButton from "../components/Button";

import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

const ConfirmRegistration = () => {
  const [disabled, setDisabled] = useState(true);

  return (
    <div className="flex flex-col items-center w-screen px-14 py-10 bg-[--gray-01] gap-4 text-[--body-text] justify-center space-y-8 ">
      <>
        <AuthenticationHeaders
          headerTitle="Have you checked your Email?"
          bodyTitle="We have sent an email with password reset information to u****n@e***e.com."
        />

        <div className="flex  gap-3 w-[40vw] justify-center items-center h-[3rem]">
          <input
            type="text"
            name=""
            id=""
            className="border rounded-lg w-16 h-14 p-2 text-center font-semibold text-[--primary] text-3xl"
            onChange={() => setDisabled(false)}
          />
          <input
            type="text"
            name=""
            id=""
            className="border rounded-lg  w-16 h-14 p-2 text-center font-semibold text-[--primary] text-3xl"
          />
          <input
            type="text"
            name=""
            id=""
            className="border rounded-lg  w-16 h-14 p-2 text-center font-semibold text-[--primary] text-3xl"
          />
          <input
            type="text"
            name=""
            id=""
            className="border rounded-lg  w-16 h-14 p-2 text-center font-semibold text-[--primary] text-3xl"
          />
          <input
            type="text"
            name=""
            id=""
            className="border rounded-lg  w-16 h-14 p-2 text-center font-semibold text-[--primary] text-3xl"
          />
        </div>
        <div className="text-center">
          <TextButton
            borderRadius="rounded-2xl"
            width="w-[40vw]"
            height="h-[3.5rem]"
            text={`${disabled ? "Resend code" : "Confirm"} `}
            textColor={`${disabled ? "bg-[--disabled]" : "bg-[--primary]"} `}
            disabled={disabled}
            buttonColor="text-[--body-text-disabled-reversed]"
          />
          <p className="pt-4">
            Didn’t receive the link? <br /> (Can only be requested after 30
            seconds)
          </p>
        </div>
        <Link to="/signin" className="text-[--primary] hover:text-[--hover]">
          <span className="inline-block rotate-[205deg] pr-2">➜</span> Back to
          login screen
        </Link>
      </>
    </div>
  );
};

export default ConfirmRegistration;
