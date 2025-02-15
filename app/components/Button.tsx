import { FC } from "react";

interface TextButtonProps {
    text: string;
    textColor?: string;
    onClick?: () => void;
    buttonColor?: string;
    width?: string;
    height?: string;
    border?: string;
    borderRadius?: string;
    disabled?: boolean;
}

const TextButton: FC<TextButtonProps> = ({ textColor="bg-[--enabled]", width, height="h-[--input-height]", border = "border", text="Click me", buttonColor, borderRadius, onClick, disabled=false }) => {
    return (
        <div>
            <button
                disabled={disabled}
                className={`${width} ${height} ${buttonColor} ${border} ${disabled && "bg-[--disabled] cursor-not-allowed" } ${textColor} text-center ${borderRadius}`}
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    );
};

export default TextButton;