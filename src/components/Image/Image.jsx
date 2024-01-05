import "./Image.css";

import { Link } from "react-router-dom";
function Image({ id, url, title }) {
  return (
    <Link to={`/photo/${id}`} className="image-container">
      {/* For Gallery View  */}
      {/* Image  */}
      <img src={url} />

      {/* Its ID and Title */}
      <div>
        <span>{id}</span>: {title}
      </div>
    </Link>
  );
}

export default Image;
