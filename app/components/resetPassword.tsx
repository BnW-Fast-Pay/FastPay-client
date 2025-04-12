import { useState, useEffect } from "react";
import axios from "axios";
import { z } from "zod";
import AuthenticationHeaders from "../components/authenticationHeaders";
import TextButton from "../components/Button";
import { InputPassword } from "../components/input";
import { resetPasswordSchema } from "../utility/schema";

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("ffffffff");
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchOldPassword = async () => {
            try {
                const response = await axios.get("/api/get-old-password");
                if (response.status === 200) {
                    setOldPassword(response.data.oldPassword);
                }
            } catch (error) {
                console.error("Error fetching old password:", error);
            }
        };

        fetchOldPassword();
    }, []);

    const handleResetPassword = async () => {
        try {
            resetPasswordSchema.parse({ password, confirmPassword });
            if (password === oldPassword) {
                setError("New password cannot be the same as the old password.");
                return;
            }

            setError("");
            // Logic to reset the password
            console.log("Password reset successfully:", password);
        } catch (error) {
            if (error instanceof z.ZodError) {
                setError(error.errors[0].message);
            } else {
                console.error("Error resetting password:", error);
            }
        }
    };

    return (
        <div className="flex flex-col items-center w-screen mx-auto min-h-screen p-4">
            <AuthenticationHeaders
                headerTitle="Reset Password"
                bodyTitle="Choose a new password for your account"
            />
            <div className="p-8 space-y-6">
                <InputPassword
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <InputPassword
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm password"
                />
                {error && <p className="text-[--error]">{error}</p>}
                <TextButton
                    text="Reset Password"
                    textColor="text-[--body-text-reversed]"
                    buttonColor="bg-[--enabled]"
                    width="w-[90vw] md:w-[40vw]"
                    borderRadius="rounded-[--radius-sm]"
                    onClick={handleResetPassword}
                    disabled={!password || !confirmPassword}
                />
            </div>
        </div>
    );
};

export default ResetPassword;