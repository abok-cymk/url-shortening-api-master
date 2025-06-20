import clsx from "clsx";
import { memo } from "react";

const baseImagePath = import.meta.env.BASE_URL;
const Illustration = ({ className }) => {
  return (
    <img
      src={`${baseImagePath}/illustration-working.svg`}
      fill="true"
      priority="true"
      alt=""
      className={clsx("w-full h-full", className)}
    />
  );
};

export default memo(Illustration);
