

// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/home/Navbar";
// import Home from "./pages/Home";
// import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Experience from "./pages/Experience";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <>
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/experience" element={<Experience />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
      
//     </>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;