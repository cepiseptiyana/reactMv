function Icons(props) {
  const { icon, onClick } = props;

  return (
    <div
      className="icon"
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: icon }}
    ></div>
  );
}
