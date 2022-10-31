import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Menu from "./pages/menu";
import MainLayout from "./components/layouts/main-layout";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="contact">Contact</a></li>
            <li><a href="menu">Menu</a></li>
          </ul>
        </nav>
      </header>
      <div className="page-container">
        <BrowserRouter>
          <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="menu" element={<Menu />} />
            </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;