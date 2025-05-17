import { useNavigate } from "react-router-dom";
import { use, useState } from "react";

// Molecules
import InputSearch from "../Elements/Input/InputSearch";
import Text from "../Elements/Heading/index";
import Menu from "../Elements/Menu/index";

function Navbar() {
  const [input, setInputName] = useState("");
  const [classNameInput, setClassNameInput] = useState(false);
  const [classNameMenu, setClassNameMenu] = useState(false);

  const navigate = useNavigate();

  function handleChange(e) {
    setInputName(e.target.value);
  }

  // function handleSubmit
  function handleSubmit(e) {
    e.preventDefault();

    // handle humburger
    if (e.target.localName === "line") {
      setClassNameMenu(!classNameMenu);
      setClassNameInput(false);
    } else {
      setClassNameMenu(false);

      // handle input
      if (classNameInput == true) {
        if (input.length != 0) {
          navigate("/moviesDetails?name=" + input);
        } else {
          alert("search is empty");
          setClassNameInput(true);
        }
      } else {
        setClassNameInput(!classNameInput);
      }
    }
  }

  return (
    <header className="Navbar">
      {/* Judul */}
      <Text className="judul">MoviesDetails</Text>

      {/* Input Search */}
      <InputSearch
        classNameInput={classNameInput}
        id="MoviesDetails"
        onChange={handleChange}
        onClick={handleSubmit}
        type="text"
        placeholder="Search Movies"
      >
        MoviesDetails
      </InputSearch>

      {/* Menu  */}
      <Menu
        className={classNameMenu ? "Menu active" : "Menu"}
        home="/"
        horror="/moviesDetails?name=horror"
        comedy="/moviesDetails?name=comedy"
        drama="/moviesDetails?name=drama"
      />
    </header>
  );
}
export default Navbar;
