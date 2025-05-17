// import LinkPage from "./Link";
import { Link } from "react-router-dom";

function Menu(props) {
  const { home, horror, comedy, drama, className } = props;

  return (
    <div className={className}>
      <Link className="home" to={home}>
        Home
      </Link>
      <Link className="horror" to={horror}>
        Horror
      </Link>
      <Link className="comedy" to={comedy}>
        Comedy
      </Link>
      <Link className="drama" to={drama}>
        Drama
      </Link>
    </div>
  );
}

export default Menu;
