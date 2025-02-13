import { InputEmail, InputPassword, InputPhoneNumber } from "~/components/input";
import { useState } from "react";
import AuthenticationHeaders from "~/components/authenticationHeaders";
import TextButton from "~/components/Button";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "FastPay" },
    { name: "description", content: "Welcome to BNW FastPay!" },
  ];
};

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="flex flex-col items-center h-screen">
      {/*<Loader />*/}
      <AuthenticationHeaders
        headerTitle="Welcome to BNW FastPay!"
        bodyTitle="Please sign in to continue."
      />
      <InputEmail
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputPassword
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputPhoneNumber
        value={phoneNumber}
        onChange={setPhoneNumber}
      />
      <TextButton text="Sign in" />
    </div>
  );
}