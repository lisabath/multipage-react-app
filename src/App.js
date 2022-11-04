import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Menu from "./pages/menu";
import MainLayout from "./components/layouts/main-layout";
import DashboardLayout from './components/layouts/dashboard-layout';
import Help from './pages/dashboard/help';
import FAQ from './pages/dashboard/faq';
import DashboardHome from './pages/dashboard/home';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Routes>
                <Route path="/" element={<MainLayout />} >
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="menu" element={<Menu />} />  
                  <Route path="products" element={<Products />} />  
              </Route>
              <Route path="dashboard" element={<DashboardLayout />}>
                  <Route index element={<DashboardHome />} />
                  <Route path="help" element={<Help />} />
                    <Route path="faq" element={<FAQ />} />
                  </Route>
              </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;