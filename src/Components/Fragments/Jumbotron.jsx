import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Services
import data from "@/services/jumbotron/slide.service.js";

// Elements
import Paragraph from "@Components/Elements/Paragraph/index.jsx";
import Btn from "@Components/Elements/Button/index.jsx";
import Heading from "@Components/Elements/Heading/index.jsx";
import Audio from "../Elements/Audio/audio.jsx";
import Input from "../Elements/Input/input.jsx";
import RadioBtn from "../Elements/Input/jumbotron/radio.jsx";

// assets

function Jumbotron() {
  // filter data sesuai dengan name
  const [dataFilter, setDataFilter] = useState(data);
  const [index, setIndex] = useState("1");
  const [audio, setAudio] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {});

  function moviesDetail(data) {
    const dataName = data.name.split(" ")[0].toLowerCase();
    console.log(dataName);

    if (
      dataName === "wakanda" ||
      dataName === "avengers" ||
      dataName === "spiderman" ||
      dataName === "transformers" ||
      dataName === "insidious"
    ) {
      navigate("/moviesDetails?name=" + dataName);
    } else {
      navigate("/notFound");
    }
  }

  return (
    <>
      <section className="container-fluid jumbotron">
        {dataFilter.map((data) => {
          const i = data.id;
          const name = data.name;
          if (index === i.toString()) {
            return (
              <video
                key={data.id}
                autoPlay
                loop
                muted={audio}
                className={"jumbotron__video " + name.toLowerCase()}
              >
                <source src={data.video} type="video/mp4" />
              </video>
            );
          }
        })}

        <div className="row line__1">
          <div className="col-md-6 column_1">
            {dataFilter.map((data) => {
              const i = data.id;
              if (index === i.toString())
                return (
                  <div key={data.id} data-aos="zoom-in">
                    <Heading className="heading">{data.name}</Heading>
                    <Btn
                      className="btn"
                      variant="dark"
                      onClick={() => moviesDetail(data)}
                    >
                      More Details
                    </Btn>
                  </div>
                );
            })}

            {dataFilter.map((data) => {
              const convertStr = data.id;
              if (index === convertStr.toString())
                return (
                  <Paragraph key={data.id} className="paragraph">
                    {data.text}
                  </Paragraph>
                );
            })}

            <div className="contain__slide">
              <RadioBtn onChange={(e) => setIndex(e.target.value)} />

              <Audio
                audioElement={audio}
                onClick={() => setAudio(!audio)}
              ></Audio>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Jumbotron;
