import { Outlet } from "react-router-dom";

// Layouts / templates
import Auth from "../Components/Layouts/AuthLayout";

// Fragments / organisms
import Navbar from "../Components/Fragments/Navbar";
import Jumbotron from "../Components/Fragments/Jumbotron";
import Section from "../Components/Fragments/Section";
import Footer from "../Components/Fragments/Footer";

function Home() {
  return (
    <>
      <Auth>
        <Navbar />

        <main>
          <Jumbotron />
          <Section />
        </main>

        <footer className="footer">
          <Footer></Footer>
        </footer>
      </Auth>

      {/* route child */}
      {/* <Outlet /> */}
    </>
  );
}
export default Home;
