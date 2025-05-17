import Button from "react-bootstrap/Button";

function Btn(props) {
  const { className, onClick, children, variant } = props;

  return (
    <Button variant={variant} className={className} onClick={onClick}>
      {children}
    </Button>
  );
}

export default Btn;
