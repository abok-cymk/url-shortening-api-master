import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { memo } from "react";

const MenuItem = ({ className, children, ...props }) => {
  return (
    <Link className={clsx(className)} {...props}>
      {children}
    </Link>
  );
};

export default memo(MenuItem);
