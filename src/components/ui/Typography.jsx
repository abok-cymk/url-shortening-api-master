import clsx from "clsx";

const Typography = ({ as: Tag = "p", className, children, ...props }) => {
  return (
    <Tag className={clsx("text-GrayishViolet", className)} {...props}>
      {children}
    </Tag>
  );
}

export default Typography;
