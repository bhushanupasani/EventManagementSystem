import { Link } from "react-router-dom";

export default function AdminHome() {
  return (
    <div>
      <h1>Admin Home</h1>
      <Link to={`/allinfo`} className="btn btn-outline-primary mx-2">
        See All Info
      </Link>
      <Link to={`/adminmanage`} className="btn btn-outline-primary mx-2">
        Manage
      </Link>
    </div>
  );
}
