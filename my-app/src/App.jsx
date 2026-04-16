import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />


      </Routes>


    </BrowserRouter>
  )
}
export default App;