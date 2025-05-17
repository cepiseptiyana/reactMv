// elements
import Heading from "../Elements/Heading";
import feather from "feather-icons";

// Elements & Fragments
import Menu from "../Elements/Menu";
import LinkPage from "../Elements/Menu/Link";

// icons
const instagram = feather.icons.instagram.toSvg();
const facebook = feather.icons.facebook.toSvg();
const twitter = feather.icons.twitter.toSvg();

function Footer() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="wrapper__text">
            <Heading className="text">Movie Detail</Heading>
          </div>
          <div className="wrapper__sosmed">
            <div
              className="instagram"
              dangerouslySetInnerHTML={{ __html: instagram }}
            ></div>
            <div
              className="facebook"
              dangerouslySetInnerHTML={{ __html: facebook }}
            ></div>
            <div
              className="twitter"
              dangerouslySetInnerHTML={{ __html: twitter }}
            ></div>
          </div>
          <div className="wrapper__about">
            <ul>
              <li>
                <Heading className="text">Movies</Heading>
                <Menu
                  className="Menu"
                  home="/"
                  horror="/moviesDetails?name=horror"
                  comedy="/moviesDetails?name=comedy"
                  drama="/moviesDetails?name=drama"
                />
              </li>
              <li>
                <Heading className="text">Support</Heading>

                <div className="wrapper">
                  <LinkPage className="support">Privacy Policy</LinkPage>
                  <LinkPage className="support">Help Center</LinkPage>
                  <LinkPage className="support">Terms of Service</LinkPage>
                  <LinkPage className="support">General Info</LinkPage>
                </div>
              </li>
              <li>
                <div className="wrapper">
                  <Heading className="text">Support</Heading>
                  <LinkPage className="support">Tel : 0856********</LinkPage>
                  <LinkPage className="support">cepiseptiyana.my.id</LinkPage>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
