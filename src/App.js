
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import MainLayout from "./components/layouts/main-layout";
import Products from './pages/Products';



function App() {
  
   
  return (
    <div className="App">
      
        <BrowserRouter>
          <Routes>
                <Route path="/" element={<MainLayout />} >
                  <Route index element={<Home />} />
                  <Route path="products" element={<Products />} /> 
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                 
                 
          
              </Route>
                
              </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;