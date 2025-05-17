import { useEffect, useState } from "react";

// Pages
import Home from "./Pages/Home";
import MovieDetail from "./Pages/detail";
import NotFound from "./Pages/NotFount";

import AOS from "aos";

// Route
import { HashRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path=":nameMovie" element={<Home />}></Route>
            <Route index path="mostMovie?" element={<Home />}></Route>
          </Route>
          <Route path="moviesDetails?" element={<MovieDetail />}></Route>
          <Route path="/notFound" element={<NotFound />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
