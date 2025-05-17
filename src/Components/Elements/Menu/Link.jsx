import { Link } from "react-router";

function LinkPage(props) {
  const { to, children, className } = props;

  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}

export default LinkPage;
