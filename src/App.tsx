import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1 mt-[65px]">
          <Sidebar />
          <main className="flex-1 p-6 ml-64">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
