import { useState, useEffect, FC } from "react";
import TextButton from "../components/Button";

interface ResendLinkProps {
    handleSendEmail: () => void;
}

const ResendLink: FC<ResendLinkProps> = ({ handleSendEmail }) => {
    const [countdown, setCountdown] = useState(30);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleResendEmail = async () => {
        try {
            await handleSendEmail();
            setCountdown(30);
            setIsButtonDisabled(true);
        } catch (error) {
            console.error("Error resending email:", error);
        }
    };

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setIsButtonDisabled(false);
        }
    }, [countdown]);

    return (
        <div className="text-[--body-text]">
            <div className="p-8 space-y-6 text-center items-center">
                <TextButton
                    text="Resend link"
                    textColor="text-[--body-text-reversed]"
                    buttonColor="bg-[--enabled]"
                    width="w-[90vw] md:w-[40vw]"
                    borderRadius="rounded-[--radius-sm]"
                    onClick={handleResendEmail}
                    disabled={isButtonDisabled}
                />
                <p>Didn&apos;t receive a code?</p>
                {isButtonDisabled ? (
                    <span>(Can only be requested after {countdown} seconds)</span>
                ) : (
                    <span>(You can now resend the link)</span>
                )}
            </div>
        </div>
    );
};

export default ResendLink;