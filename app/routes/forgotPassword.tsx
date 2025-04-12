import axios from "axios";
import { Link } from "@remix-run/react";
import { useState } from "react";
import AuthenticationHeaders from "../components/authenticationHeaders";
import TextButton from "../components/Button";
import { InputEmail } from "../components/input";
import maskEmail from "../utility/maskEmail";
import ResendLink from "../components/resendLink";
import { z } from "zod";
import { emailSchema } from "../utility/schema";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [maskedEmail, setMaskedEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [error, setError] = useState("");

    const handleSendEmail = async () => {
        try {
            emailSchema.parse(email);
            setIsEmailValid(true);
            setError("");

            setIsEmailSent(true);
            setMaskedEmail(maskEmail(email));
            // const response = await axios.post("/api/send-email", { email });
            // if (response.status === 200) {
            //     setIsEmailSent(true);
            //     setMaskedEmail(maskEmail(email));
            // }
        } catch (error) {
            if (error instanceof z.ZodError) {
                setIsEmailValid(false);
                setError(error.errors[0].message);
            } else {
                console.error("Error sending email:", error);
            }
        }
    };

    return (
        <div className="flex flex-col items-center w-screen mx-auto min-h-screen p-4">
            <AuthenticationHeaders
                headerTitle="Forgot Your Password"
                bodyTitle={isEmailSent ? `A magic link has been sent to ${maskedEmail}` : "No problem, enter your email and we'll send a magic link."}
            />
            {!isEmailSent && (
                <div className="p-8 space-y-6">
                    <InputEmail
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                    {!isEmailValid && <p className="text-[--error]">{error}</p>}
                    <TextButton
                        text="Send me the link"
                        textColor="text-[--body-text-reversed]"
                        buttonColor="bg-[--enabled]"
                        width="w-[90vw] md:w-[40vw]"
                        borderRadius="rounded-[--radius-sm]"
                        onClick={handleSendEmail}
                        disabled={!email}
                    />
                </div>
            )}
            {isEmailSent && (
                <ResendLink handleSendEmail={handleSendEmail} />
            )}
            <div>
                <Link to="/signIn" className="flex p-4 text-[--primary] justify-center items-center">
                    <img src="/arrow-left-up-icon.svg" alt="Arrow left up icon" className="w-6 h-6 mr-2" />
                    <p>Back to login screen</p>
                </Link>
            </div>
        </div>
    );
};

export default ForgotPassword;