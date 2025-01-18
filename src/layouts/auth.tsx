import { Outlet } from "react-router-dom";

import Logo from "../components/logo";

const AuthLayout = () => {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center">
      <section className={"w-4/5 max-w-sm"}>
        <Logo/>
        <Outlet />
      </section>
    </main>
  );
};

export default AuthLayout;
