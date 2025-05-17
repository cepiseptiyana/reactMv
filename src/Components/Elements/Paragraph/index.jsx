function Paragraph(props) {
  const { children, className } = props;
  return (
    <p className={className} data-aos="fade-up">
      {children}
    </p>
  );
}

export default Paragraph;
