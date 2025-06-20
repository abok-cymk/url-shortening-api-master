const Heading = ({as: Tag = "h1", className, children, ...props }) => {
  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
}

export default Heading;
