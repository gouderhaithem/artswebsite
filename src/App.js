import GlobalStyle from "./components/GolbalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import MovieDetaile from "./pages/MovieDetaile";
//Animation
import { AnimatePresence } from "framer-motion";

//Global style

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
   
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutUs />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/our-work/:id" element={<MovieDetaile />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
