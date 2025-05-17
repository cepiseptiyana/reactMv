import { useEffect, useRef, useState } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";

// service
import { dataApi } from "../../services/section/views";

// Elements & Fragments
import Menu from "../Elements/Menu";
import Heading from "../Elements/Heading";

// fragments
import Slider from "./Slider";
import Pagination from "./Pagination";

const Section = () => {
  const location = useLocation();
  const { nameMovie } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState([]);
  const [mostViewed, setMostViewed] = useState([]);
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    console.log(queryParams.get("name"));
    console.log(nameMovie);
    async function fetchData() {
      try {
        // slider
        if (nameMovie) {
          if (
            nameMovie === "horror" ||
            nameMovie === "comedy" ||
            nameMovie === "drama"
          ) {
            const get = await dataApi(nameMovie);
            console.log(get);
            setMovie(get.Search);
          } else {
            window.location.href = "/notFound";
          }
        } else {
          const get = await dataApi("avengers");
          setMovie(get.Search);
        }

        // pagnation
        if (queryParams.get("name")) {
          if (
            queryParams.get("name") === "avengers" ||
            queryParams.get("name") === "transformers" ||
            queryParams.get("name") === "fast"
          ) {
            const mostViewed = await dataApi(queryParams.get("name"));
            console.log(mostViewed);
            setMostViewed(mostViewed.Search);
          } else {
            window.location.href = "/notFound";
          }
        } else {
          const mostViewed = await dataApi("avengers");
          setMostViewed(mostViewed.Search);
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [nameMovie, queryParams.get("name")]);

  function moviesDetail(imdbID) {
    navigate("/moviesDetails?fromHome=" + imdbID);
  }

  return (
    <>
      {/* nav */}
      <section className="section">
        <nav className="container">
          <Menu
            className="Menu"
            home="/"
            horror="/horror"
            comedy="/comedy"
            drama="/drama"
          />
        </nav>

        {/* slide viewed */}
        <div className="container views">
          <div className="line__2">
            <Slider movieShow={movie} />
          </div>
        </div>

        {/* most viewed */}
        <div className="container most__viewed">
          <div className="wrapper__most__viewed">
            <Heading>Most Viewed</Heading>

            {/* pagination */}
            <Pagination
              mostViewed={mostViewed}
              onClick={(imdbID) => moviesDetail(imdbID)}
            />
          </div>

          <div className="container pagination">
            <div className="wrapper__pagination">
              <Link to="/mostMovie?name=avengers">1</Link>
              <Link to="/mostMovie?name=transformers">2</Link>
              <Link to="/mostMovie?name=fast">3</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
