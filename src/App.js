import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar></Navbar>

        <main className="container mx-auto px-3 pb-12">content</main>
        <Footer></Footer>

      </div>
    </Router>
  );
}

export default App;
