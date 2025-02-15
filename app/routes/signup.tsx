import { useState } from "react";
import { InputEmail, InputPassword, InputPhoneNumber } from "~/components/input";

const SignUp = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    return (
        <div className="h-screen bg-[--primary]">
            <InputPassword />
            <InputEmail />
            <InputPhoneNumber
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                />
        </div>
    )
}

export default SignUp;