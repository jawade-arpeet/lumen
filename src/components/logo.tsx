import React from "react";

import { SiLoom } from "react-icons/si";
import { Link } from "react-router-dom";

import cn from "../utils/cn";

const Logo: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  className,
  ...props
}) => {
  return (
    <Link
      to={"/"}
      className={cn(
        "inline-flex items-center justify-center gap-x-2",
        className,
      )}
      {...props}
    >
      <SiLoom className="text-lime-500" size={24} />
      <span className="text-xl font-semibold">Lumen</span>
    </Link>
  );
};

export default Logo;
