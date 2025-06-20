import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { memo } from "react";

const baseImagePath = import.meta.env.BASE_URL;
const Logo = ({
  to = "/",
  src = `${baseImagePath}/logo.svg`,
  alt = "Shortly Logo",
  className,
  ...props
}) => {
  return (
    <Link to={to}>
      <img
        src={src}
        alt={alt}
        className={clsx("w-full object-contain", className)}
        {...props}
      />
    </Link>
  );
};

export default memo(Logo);
