import { Outlet, useLocation, useParams } from "react-router-dom";

// Layouts / templates
import Auth from "../Components/Layouts/AuthLayout";

// Fragments / organisms
import Navbar from "../Components/Fragments/Navbar";
import Jumbotron from "../Components/Fragments/Jumbotron";
import Footer from "../Components/Fragments/Footer";
import Detail from "../Components/Fragments/Detail";

function MoviesDetails() {
  // query ?

  return (
    <>
      <Auth>
        <Navbar />

        <main>
          <Jumbotron />
          <Detail />
        </main>

        <footer className="footer">
          <Footer></Footer>
        </footer>
      </Auth>
    </>
  );
}
export default MoviesDetails;
