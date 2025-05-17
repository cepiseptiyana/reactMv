function Image(props) {
  const { src, alt, className, onClick, title } = props;
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={onClick}
        title={title}
      />
    </>
  );
}

export default Image;
