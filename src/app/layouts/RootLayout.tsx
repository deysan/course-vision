import { useContext } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import Loader from '../components/Loader';
import Sidebar from '../components/Sidebar';
import { Context } from '../store';
import NotFound from './NotFound';

function RootLayout() {
  const { error, isLoading } = useContext(Context);

  if (error) return <NotFound />;

  return (
    <>
      <Sidebar />

      <div className="wrapper">
        <div className="header">
          {/* <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div> */}
        </div>
        <div className="main-container">{isLoading ? <Loader /> : <Outlet />}</div>
      </div>
    </>
  );
}

export default RootLayout;
