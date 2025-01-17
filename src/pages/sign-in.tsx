import { Link } from "react-router-dom";

import Button from "../components/button";
import Input from "../components/input";
import Logo from "../components/logo";

const SignIn = () => {
  return (
    <>
      <Logo />
      <h4 className="font-semibold text-xl mt-2">Sign In</h4>
      <p className="text-sm text-stone-600 -mt-0.5">Sign in to your account</p>
      <form className="flex flex-col items-center gap-y-1 mt-4">
        <Input placeholder="Email" type="email" name="email" />
        <Input placeholder="Password" type="password" name="password" />
        <Button className="w-full">Sign In</Button>
      </form>
      <p className="mt-6 text-sm text-stone-600">
        Don't have an account?{" "}
        <Link to="/sign-up" className="text-stone-950 font-medium hover:underline hover:underline-offset-2">
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default SignIn;
