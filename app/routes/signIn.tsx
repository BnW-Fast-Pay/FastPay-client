import { useState } from "react";
import { Link } from "@remix-run/react";
import { z } from "zod";
import AuthenticationHeaders from "~/components/authenticationHeaders";
import TextButton from "~/components/Button";
import { InputEmail, InputPassword } from "~/components/input";
import { signInSchema } from "~/utility/schema";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignIn = async () => {
        try {
            signInSchema.parse({ email, password });
            setError("");

            // Logic to handle sign in
            console.log("Sign in successful:", { email, password });
        } catch (error) {
            if (error instanceof z.ZodError) {
                setError(error.errors[0].message);
            } else {
                console.error("Error signing in:", error);
            }
        }
    };

    return (
        <div className="flex flex-col items-center w-screen mx-auto min-h-screen py-8">
            <AuthenticationHeaders
                headerTitle="Welcome to BNW FastPay"
                bodyTitle="Fast, secure and rewarding airtime & data top-ups at your fingertips"
            />
            <a
                href="/"
                className="pt-4">
                <TextButton
                    text="Sign In With Google"
                    width="w-[90vw] md:w-[40vw]"
                    height="h-[3.5rem]"
                    borderRadius="rounded-[--radius-xxl]"
                />
            </a>
            <div className="flex items-center pt-4 gap-3 w-[90vw] md:w-[40vw]">
                <hr className="flex-grow border-gray-300" />
                <span>OR</span>
                <hr className="flex-grow border-gray-300" />
            </div>
            <div className="pt-4 space-y-6 ">
                <InputEmail
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <InputPassword
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                {error && <p className="text-[--error]">{error}</p>}
                <div className="flex justify-between items-center gap-4">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox" />
                        <span>Remember for 30 days</span>
                    </label>
                    <Link to="/forgotPassword" className="text-[--primary] hover:text-[--hover]">
                        Forgot Password
                    </Link>
                </div>
                <TextButton
                    text="Sign In"
                    textColor="text-[--body-text-reversed]"
                    buttonColor="bg-[--enabled]"
                    width="w-[90vw] md:w-[40vw]"
                    borderRadius="rounded-[--radius-sm]"
                    onClick={handleSignIn}
                    disabled={!email || !password}
                />
                <p className="text-center">
                    Don&apos;t have an account?{" "}
                    <Link to="/signup" className="text-[--primary] hover:text-[--hover]">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;