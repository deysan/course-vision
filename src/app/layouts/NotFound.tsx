import { Link, useRouteError } from 'react-router-dom';

function NotFound() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="container">
      <div className="error-wrapper">
        <h1 className="error-title">404</h1>
        <div className="error-text">{error?.statusText || error?.message || 'Not Found Page'}</div>
        <button className="error-btn">
          <Link to="/" className="error-link">
            Go Home
          </Link>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
