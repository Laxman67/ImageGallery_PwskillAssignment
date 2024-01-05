import "./Image.css";
import { Link } from "react-router-dom";

function Image({ id, url, title }) {
  return (
    <Link to={`/photo/${id}`} className="image-container">
      <img src={url} />

      <div>{title}</div>
    </Link>
  );
}

export default Image;
