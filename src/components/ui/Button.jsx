import clsx from "clsx";
import { memo } from "react";

const Button = ({ type, className, children, ...props }) => {
  return (
    <button type={type} {...props} className={clsx("bg-Cyan text-white px-6 py-2 cursor-pointer", className)}>
      {children}
    </button>
  );
}

export default memo(Button);
