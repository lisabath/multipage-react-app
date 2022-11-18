import { Outlet } from "react-router-dom"; 

const MainLayout = () => {
  return (
        <>
            <header className="App-header">
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="products">Films</a></li>
                        <li><a href="about">Cart</a></li>
                        <li><a href="contact">Contact</a></li>
                        
                        
                    </ul>
                </nav>
            </header>
            <div className="page-container">
            <Outlet />
            </div>
        </>
    )
};

export default MainLayout;