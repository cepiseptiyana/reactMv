// feather
import feather from "feather-icons";
const volume = feather.icons["volume-2"].toSvg();
const volume_x = feather.icons["volume-x"].toSvg();

function Audio(props) {
  const { audioElement, onClick } = props;

  if (audioElement) {
    return (
      <div
        className="audio x"
        onClick={onClick}
        dangerouslySetInnerHTML={{ __html: volume_x }}
      ></div>
    );
  }

  return (
    <div
      className="audio"
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: volume }}
    ></div>
  );
}

export default Audio;
