function Heading(props) {
  const { className, children, style } = props;

  return (
    <h1 style={style} className={className}>
      {children}
    </h1>
  );
}

export default Heading;
