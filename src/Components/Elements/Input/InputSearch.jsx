// Feather Icons
import feather from "feather-icons";

// elements
import Input from "./input";

// Icons
const Search = feather.icons.search.toSvg();
const humburger = feather.icons.menu.toSvg({ color: "white" });

function InputSearch(props) {
  const { id, type, placeholder, onChange, classNameInput, onClick } = props;

  return (
    <div className="input__search">
      <Input
        className={classNameInput ? "input input__search__active" : "input"}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />

      <div
        className="btn__Search"
        dangerouslySetInnerHTML={{ __html: Search }}
        onClick={onClick}
      ></div>

      <div
        onClick={onClick}
        className="humburger"
        dangerouslySetInnerHTML={{ __html: humburger }}
      ></div>
    </div>
  );
}

export default InputSearch;
