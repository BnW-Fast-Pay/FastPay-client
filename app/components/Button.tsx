import { FC } from "react";

interface TextButtonProps {
    text: string;
    color?: string;
    onClick?: () => void;
    buttonColor?: string;
    width?: string;
    height?: string;
}

const TextButton: FC<TextButtonProps> = ({ width="w-screen", height="h-[--input-height]", text = "Click me", buttonColor="bg-[--enabled]", onClick }) => {
    return (
        <div className="flex absolute items-center">
            <button
                disabled={true}
                className={`${width} md:w-[--input-width-md] ${height} ${buttonColor} hover:bg-[--hover] text-[--body-text-reversed] font-bold py-2 px-4 rounded`}
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    );
};

export default TextButton;