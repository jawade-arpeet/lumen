import { Link } from "react-router-dom";
import { ArrowUpToLine } from "lucide-react";

import Button from "../components/button";
import Logo from "../components/logo";

const Home = () => {
  return (
    <main className="h-screen w-screen">
      <header className="px-4 py-4 sm:px-6 sm:py-6 max-w-screen-xl mx-auto">
        <nav className="flex items-center justify-between">
          <Logo />
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
      <section className="mt-20 md:mt-24 px-4 md:px-10">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tight max-w-screen-md">
          Share Your Stories Through Video
        </h1>
        <p className="text-sm text-stone-600 mt-1 max-w-lg sm:text-lg sm:leading-[1.4rem]">
          Upload, stream, and share your videos with our growing community.
          High-quality streaming, no compromises.
        </p>
        <Link to={"/sign-up"}>
          <Button className="mt-4">
            <ArrowUpToLine size={16} />
            <span>Start Uploading</span>
          </Button>
        </Link>
      </section>
    </main>
  );
};

export default Home;
