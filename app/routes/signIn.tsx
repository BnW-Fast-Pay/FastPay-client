/** @format */
import Loader from "~/components/loader";
import AuthenticationHeaders from "../components/authenticationHeaders";
import TextButton from "../components/Button";
import { InputPassword, InputEmail } from "../components/input";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

const SignIn = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSignIn(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center w-screen px-12 py-10 bg-[--gray-01] gap-4 text-[--body-text] justify-center space-y-4">
      {showSignIn ? (
        <>
          <AuthenticationHeaders
            headerTitle="Welcome to BNM FastPay"
            bodyTitle="Fast, secure and rewarding airtime & data top-ups at your fingertips"
          />

          <Link
            to="/"
            className="flex w-[40vw] h-[3rem] justify-center items-center rounded-full gap-3 border bg-white"
          >
            <img src="/Google.png" alt="" className="w-100 h-100" />
            <TextButton
              borderRadius="rounded-full"
              text="Sign In With Google"
              textColor=""
              border=""
            />
          </Link>
          <div className="flex items-center gap-3 w-[40vw]">
            <hr className="flex-grow border-gray-300" />
            <span>OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="gap-4 flex flex-col">
            <InputEmail placeholder="Email" />
            <InputPassword placeholder="Password" />
            <div className="flex justify-between w-[40vw]">
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
            borderRadius="rounded-2xl"
            width="w-[40vw]"
            height="h-[3rem]"
            text="Sign In"
            textColor="bg-[--disabled]"
            disabled
            buttonColor="text-[--body-text-disabled-reversed]"
          />
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
