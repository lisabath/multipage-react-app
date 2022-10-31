import { Outlet } from "react-router-dom"; 

const MainLayout = () => {
  return (
        <>
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
            <Outlet />
            </div>
        </>
    )
};

export default MainLayout;