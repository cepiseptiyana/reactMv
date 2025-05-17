import { useEffect, useState } from "react";
import { data, Link, useLocation } from "react-router-dom";

// fetch API
import { dataApi, detailMovie } from "../../services/section/views";

// Elements & Fragments
import Heading from "../Elements/Heading";
import Image from "../Elements/Image/index";

// fragments
import Pagination from "./Pagination";

function ShowDetail(props) {
  const { show, dataDetail } = props;
  if (show) {
    return (
      <div className="container detail" data-aos="flip-up">
        <Image src={dataDetail.Poster} />
        <div className="container">
          <Heading>{dataDetail.Title}</Heading>
          <p style={{ color: "white" }}>{dataDetail.Plot}</p>
          <p style={{ color: "white" }}>Actors: {dataDetail.Actors}</p>
          <p style={{ color: "white" }}>Genre: {dataDetail.Genre}</p>
          <p style={{ color: "white" }}>Released: {dataDetail.Released}</p>
        </div>
      </div>
    );
  }
}

const Detail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [movie, setMovie] = useState([]);
  const [fromHome, setMovieFromHome] = useState([]);
  const [dataDetail, setDataDetail] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        if (queryParams.get("fromHome")) {
          const fromHome = await detailMovie(queryParams.get("fromHome"));
          console.log(fromHome);
          setShow(true);
          setDataDetail(fromHome);
        } else {
          const gets = await dataApi(queryParams.get("name"));
          console.log(gets);
          setMovie(gets.Search);
        }
      } catch (err) {
        console.log("error: " + err);
      }
    }
    fetch();
  }, [queryParams.get("name")]);

  async function moviesDetail(imdbID) {
    try {
      const details = await detailMovie(imdbID);
      setDataDetail(details);
      console.log(details);
      setShow(true);
    } catch (err) {
      console.log("error: " + err);
    }
  }

  return (
    <>
      <section className="section">
        {/* most viewed */}
        <div className="container most__viewed">
          <div className="wrapper__most__viewed">
            <ShowDetail show={show} dataDetail={dataDetail} />

            <Heading>Details</Heading>

            {/* pagination */}
            <Pagination
              mostViewed={movie}
              onClick={(imdbID) => moviesDetail(imdbID)}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
