import { useState } from 'react';
import AuthenticationHeaders from '~/components/authenticationHeaders';
import {
  ConfirmPassword,
  FullName,
  InputEmail,
  InputPassword,
  InputPhoneNumber,
} from '~/components/input';

const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  // const [formData, setFormData] = useState({
  //   fullName: '',
  //   email: '',
  //   phoneNumber: phoneNumber,
  //   password: '',
  //   confirmPassword: '',
  // });
  return (
    <main className="pt-[78px] min-[500px]:w-[480px] px-1 mx-auto">
      <AuthenticationHeaders
        headerTitle="Create Your BNW FastPay Account"
        bodyTitle="sign Up to enjoy fast, secure transaction and exclusive rewards"
      />

      <form
        className="mt-8 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (!isDisabled) return;
        }}
      >
        <FullName />
        <InputEmail />
        <InputPhoneNumber value={phoneNumber} onChange={setPhoneNumber} />
        <InputPassword />
        <ConfirmPassword />
        <button
          type="submit"
          className={`py-5 px-2 border w-full rounded-[--radius-sm] text-white font-comfortaa ${
            !isDisabled
              ? 'bg-[--disabled] cursor-not-allowed'
              : 'bg-[--enabled]'
          }`}
        >
          Sign Up
        </button>
      </form>
    </main>
  );
};

export default SignUp;
