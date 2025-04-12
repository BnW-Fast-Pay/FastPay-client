import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";
import { z } from "zod";
import AuthenticationHeaders from "~/components/authenticationHeaders";
import TextButton from "~/components/Button";
import { InputEmail, InputPassword, InputPhoneNumber, InputFullName } from "~/components/input";
import { signupSchema } from "~/utility/schema";

const SignUp = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const isFormValid = fullName && email && phoneNumber && password && confirmPassword;
        setIsDisabled(!isFormValid);
    }, [fullName, email, phoneNumber, password, confirmPassword]);

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            signupSchema.parse({ fullName, email, phoneNumber, password, confirmPassword });
            setError("");
            setIsDisabled(true);

            // Logic to handle sign up
            console.log("Sign up successful:", { fullName, email, phoneNumber, password });
        } catch (error) {
            if (error instanceof z.ZodError) {
                setError(error.errors[0].message);
            } else {
                console.error("Error signing up:", error);
            }
        }
    };

    return (
        <div className="flex flex-col items-center w-screen mx-auto min-h-screen p-4">
            <AuthenticationHeaders
                headerTitle="Create Your BNW FastPay Account"
                bodyTitle="Sign up to enjoy fast, secure transactions and exclusive rewards"
            />
            <form className="mt-8 space-y-4 p-8 " onSubmit={handleSignUp}>
                <InputFullName
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                />
                <InputEmail
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <InputPhoneNumber
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    placeholder="Phone Number"
                />
                <InputPassword
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <InputPassword
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                />
                {error && <p className="text-[--error]">{error}</p>}
                <TextButton
                    text="Sign Up"
                    textColor="text-[--body-text-reversed]"
                    buttonColor={isDisabled ? "bg-[--disabled]" : "bg-[--enabled]"}
                    width="w-[90vw] md:w-[40vw]"
                    borderRadius="rounded-[--radius-sm]"
                    onClick={handleSignUp}
                    disabled={isDisabled}
                />
                <p className="text-center">
                    Already have an account?{" "}
                    <Link to="/signIn" className="text-[--primary] hover:text-[--hover]">
                        Sign in
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default SignUp;