import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./config/ProtectedRoutes";
import PublicRoutes from "./config/PublicRoutes";
import About from "./pages/About";
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Gallery from './pages/Gallery';
function App() {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/portfolio" element={<Portfolio/>}/>
        <Route exact path="/gallery" element={<Gallery/>}/>
      </Route>
      <Route element={<ProtectedRoutes />}>
      </Route>
    </Routes>
  );
}

export default App;
