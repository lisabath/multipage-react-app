import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <header className="Dashboard-header">
        <nav>
          <ul>
            <li><a href="/">Homepage</a></li>
            <li><a href="/dashboard/help">Help</a></li>
            <li><a href="/dashboard/help/faq">FAQs</a></li>
          </ul>
        </nav>
      </header>
      <div className="page-container">
        <Outlet />
      </div>
    </>
  )
};

export default DashboardLayout;