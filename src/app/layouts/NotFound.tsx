import { Link, useRouteError } from 'react-router-dom';

function NotFound() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="error-wrapper">
      <h1 className="error-title">404</h1>
      <div className="error-text">{error?.statusText || error?.message || 'Not Found Page'}</div>
      <Link to="/" className="error-btn">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
