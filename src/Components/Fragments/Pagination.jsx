// Elements
import Image from "@Components/Elements/Image/index.jsx";
import Btn from "@Components/Elements/Button/index.jsx";

function Pagination(props) {
  const { mostViewed, linkName, onClick } = props;

  return (
    <>
      <ul className=" wrapper__list" data-aos="fade-up">
        {mostViewed.slice(0, 5).map((data) => {
          const { Poster, Title, imdbID } = data;

          return (
            <li key={imdbID} className="list__item">
              <Image
                src={Poster}
                className={imdbID}
                alt={Title}
                title={Title}
              />
              <Btn
                className="btn"
                variant="dark"
                onClick={() => onClick(imdbID)}
              >
                More Detail
              </Btn>
            </li>
          );
        })}
      </ul>

      <ul className="wrapper__list" data-aos="fade-up">
        {mostViewed.slice(5, 10).map((data) => {
          const { Poster, Title, imdbID } = data;
          return (
            <li key={imdbID} className="list__item">
              <Image
                src={Poster}
                className={imdbID}
                alt={Title}
                title={Title}
              />
              <Btn
                className="btn"
                variant="dark"
                onClick={() => onClick(imdbID)}
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

export default Pagination;
