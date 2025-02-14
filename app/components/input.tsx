import { FC, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface InputPasswordProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputPassword: FC<InputPasswordProps> = ({ placeholder = "Enter your password", value, onChange }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="relative">
            <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-screen md:w-[--input-width-md] h-[--input-height] pl-10 pr-4 py-2 outline-none border rounded-[--radius-sm]"
            />
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 px-4 py-2"
            >
                <img
                    src={isPasswordVisible ? "/password-visibility-on.svg" : "/password-visibility-off.svg"}
                    alt={isPasswordVisible ? "Hide password" : "Show password"}
                    className="w-5 h-5"
                />
            </button>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img
                    src="/lock-icon.svg"
                    alt="Lock icon"
                    className="w-5 h-5 text-gray-500"
                />
            </div>
        </div>
    );
};

interface InputEmailProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputEmail: FC<InputEmailProps> = ({ placeholder = "Enter your email", value, onChange }) => {
    return (
        <div className="relative">
            <input
                type="email"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-screen md:w-[--input-width-md] h-[--input-height] px-4 outline-none border rounded-[--radius-sm] pl-10"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img
                    src="/email-icon.svg"
                    alt="Email icon"
                    className="w-5 h-5 text-gray-500"
                />
            </div>
        </div>
    );
};

interface InputPhoneNumberProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}

const InputPhoneNumber: FC<InputPhoneNumberProps> = ({ placeholder = "Enter your phone number", value, onChange }) => {
    return (
        <div className="relative">
            <PhoneInput
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-screen md:w-[--input-width-md] h-[--input-height] px-4 py-2 border outline-none rounded-[--radius-sm]"
            />
        </div>
    );
};

export { InputPassword, InputEmail, InputPhoneNumber };