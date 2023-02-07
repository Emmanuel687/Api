import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import { GithubProvider } from "./context/github/GithubContext";

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/notfound" element={<NotFound></NotFound>}></Route>
            <Route path="/*" element={<NotFound></NotFound>}></Route>
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
