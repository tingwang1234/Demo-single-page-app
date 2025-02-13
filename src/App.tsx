import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home.tsx";
import Test from "./page/Test.tsx";
import Navbar from "./components/Navbar.tsx";
import InaccessiblePage from "./page/InaccessiblePage.tsx";

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/test" element={<Test />}/>
              <Route path="/inaccessible" element={<InaccessiblePage />}/>
          </Routes>
      </Router>
  )
}

export default App
