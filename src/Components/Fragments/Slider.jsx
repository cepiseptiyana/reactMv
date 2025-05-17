import { useNavigate } from "react-router-dom";

// Elements & Fragments
import Image from "@Components/Elements/Image/index.jsx";
import Btn from "@Components/Elements/Button/index.jsx";
import { detailMovie } from "../../services/section/views";

function Slider(props) {
  const { movieShow } = props;
  const navigate = useNavigate();

  function moviesDetail(imdbID) {
    navigate("/moviesDetails?fromHome=" + imdbID);
  }

  return (
    <>
      <ul className="cardWrapper" data-aos="fade-up">
        {movieShow.map((data) => {
          const { Poster, Title, imdbID } = data;

          return (
            <li key={imdbID} className="list">
              <Image
                src={Poster}
                className={imdbID}
                alt={Title}
                title={Title}
              />

              <Btn
                className="btn"
                variant="dark"
                onClick={() => moviesDetail(imdbID)}
              >
                More Detail
              </Btn>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Slider;
