import { Link } from "react-router-dom";
import { SiLoom } from "react-icons/si";

import Button from "../components/button";

const Home = () => {
  return (
    <main>
      <header className="px-4 py-4 sm:px-6 sm:py-6 max-w-screen-xl mx-auto">
        <nav className="flex items-center justify-between">
          <Link
            to={"/"}
            className="inline-flex items-center justify-center gap-x-2"
          >
            <SiLoom className="text-lime-400" size={24}/>
            <span className="text-xl font-semibold">Lumen</span>
          </Link>
          <div className="flex items-center gap-x-2 sm:gap-x-4">
            <Link to={"/sign-in"}>
              <Button variant={"ghost"}>Login</Button>
            </Link>
            <Link to={"/sign-up"}>
              <Button>Sign Up</Button>
            </Link>
          </div>
        </nav>
      </header>
    </main>
  );
};

export default Home;
