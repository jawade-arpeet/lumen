import { Link } from "react-router-dom";

import Button from "../components/button";
import Input from "../components/input";
import Logo from "../components/logo";

const SignUp = () => {
  return (
    <>
      <Logo />
      <h4 className="font-semibold text-xl mt-2">Create an account</h4>
      <p className="text-sm text-stone-600 -mt-0.5">
        Sign up to create your account
      </p>
      <form className="flex flex-col items-center gap-y-1 mt-4">
        <Input placeholder="Email" type="email" name="email" />
        <Input placeholder="Password" type="password" name="password" />
        <Button className="w-full">Create Account</Button>
      </form>
      <p className="mt-6 text-sm text-stone-600">
        Already have an account?{" "}
        <Link
          to="/sign-in"
          className="text-stone-950 font-medium hover:underline hover:underline-offset-2"
        >
          Login
        </Link>
      </p>
    </>
  );
};

export default SignUp;
