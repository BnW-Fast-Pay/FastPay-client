/** @format */
import Loader from "~/components/loader";
import AuthenticationHeaders from "../components/authenticationHeaders";
import TextButton from "../components/Button";
import { InputPassword, InputEmail } from "../components/input";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import Status from "~/components/status";

const SignIn = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [statusVisible, setStatusVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSignIn(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center w-screen px-12 py-10 bg-[--gray-01] gap-4 text-[--body-text] justify-center space-y-4 ">
      {showSignIn ? (
        <>
          <AuthenticationHeaders
            headerTitle="Welcome to BNM FastPay"
            bodyTitle="Fast, secure and rewarding airtime & data top-ups at your fingertips"
          />

          <Link
            to="/"
            className="flex w-[--input-width-md] h-[3rem] justify-center items-center rounded-full gap-3 border bg-white"
          >
            <img src="/Google.png" alt="" className="w-100 h-100" />
            <TextButton
              borderRadius="--radius-sm"
              text="Sign In With Google"
              textColor=""
              border=""
            />
          </Link>
          <div className="flex items-center gap-3 w-[--input-width-md]">
            <hr className="flex-grow border-gray-300" />
            <span>OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="gap-4 flex flex-col">
            <InputEmail
              placeholder="Email"
              onChange={() => setDisabled(false)}
            />
            <InputPassword
              placeholder="Password"
              onChange={() => setDisabled(false)}
            />
            <div className="flex justify-between w-[--input-width-md]">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p>Remember for 30 Days</p>
              </div>
              <Link
                to="/forget-password"
                className="text-[--primary] hover:text-[--hover]"
              >
                Forgot Password
              </Link>
            </div>
          </div>
          <TextButton
            borderRadius="rounded-[--radius-sm]"
            width="w-[--input-width-md]"
            height="h-[3.5rem]"
            text="Sign In"
            textColor={`${disabled ? "bg-[--disabled]" : "bg-[--primary]"} `}
            disabled={disabled}
            buttonColor="text-[--body-text-disabled-reversed]"
            onClick={() => setStatusVisible(true)}
          />
          {statusVisible && <Status />}
          <p>
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-[--primary] hover:text-[--hover]"
            >
              Sign Up
            </Link>
          </p>
        </>
      ) : (
        <div className="h-screen w-screen">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default SignIn;
