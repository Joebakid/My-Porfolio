import { Link } from "react-router-dom";
 

export default function PageNotFound() {
  return (
    <div className="page-not-found-style">
      <div className="page-not-found-content">
        <h1>404 — Page Not Found</h1>
        <p>The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="btn-home">Go Home</Link>
      </div>
    </div>
  );
}
