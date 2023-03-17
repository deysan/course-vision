import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';

function RootLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="container">
      <div className="sidebar">
        <span className="logo">CV</span>
        <NavLink to="/" className="logo-expand">
          CourseVision
        </NavLink>
        <div className="side-wrapper">
          <div className="side-title">Navigation</div>
          <div className="side-menu">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'sidebar-link is-active' : 'sidebar-link')}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.135 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072L3.467 7.965A2.474 2.474 0 002.5 9.867v8.702C2.5 20.464 4.047 22 5.956 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z" />
              </svg>
              Home
            </NavLink>
            {pathname !== '/' ? (
              <button className="sidebar-link back" onClick={() => navigate(-1)}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.835 12.007l.002.354c.012 1.404.096 2.657.242 3.451 0 .015.16.802.261 1.064.16.38.447.701.809.905a2 2 0 00.91.219c.249-.012.66-.137.954-.242l.244-.094c1.617-.642 4.707-2.74 5.891-4.024l.087-.09.39-.42c.245-.322.375-.715.375-1.138 0-.379-.116-.758-.347-1.064-.07-.099-.18-.226-.28-.334l-.379-.397c-1.305-1.321-4.129-3.175-5.593-3.79 0-.013-.91-.393-1.343-.407h-.057c-.665 0-1.286.379-1.603.991-.087.168-.17.496-.233.784l-.114.544c-.13.874-.216 2.216-.216 3.688zm-6.332-1.525C3.673 10.482 3 11.162 3 12a1.51 1.51 0 001.503 1.518l3.7-.328c.65 0 1.179-.532 1.179-1.19 0-.658-.528-1.191-1.18-1.191l-3.699-.327z"
                  />
                </svg>
                Back
              </button>
            ) : null}
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="header">
          {/* <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div> */}
        </div>
        <div className="main-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
