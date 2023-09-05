import { Link } from "react-router-dom";

export default function AllInfo() {
  return (
    <div>
      <Link to={`/getallclients`} className="btn btn-outline-primary mx-2">
        See All Clients
      </Link>
      <Link to={`/getallbusiness`} className="btn btn-outline-primary mx-2">
        See All Businesses
      </Link>
      <Link to={`/getallservices`} className="btn btn-outline-primary mx-2">
        See All Services
      </Link>
    </div>
  );
}
