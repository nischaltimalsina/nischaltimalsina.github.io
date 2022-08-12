import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./config/ProtectedRoutes";
import PublicRoutes from "./config/PublicRoutes";
import About from "./pages/About";
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Gallery from './pages/Gallery';
import NotFound from './pages/404NotFound';
function App() {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route exact path="/" element={<Homepage/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route  path="/portfolio" element={<Portfolio/>}/>
        <Route  path="/gallery" element={<Gallery/>}/>
        <Route  path="*" element={<NotFound/>}/>

      </Route>
      <Route element={<ProtectedRoutes />}>
      </Route>
    </Routes>
  );
}

export default App;
