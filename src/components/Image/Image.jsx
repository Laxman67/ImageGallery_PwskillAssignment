import "./Image.css";
import { Link } from "react-router-dom";

function Image({ id, url, title }) {
  return (
    // Image Components that will redirect to imageDetails using React-router-dom Link
    <Link to={`/photo/${id}`} className="image-container">
      <img src={url} alt={title} />
      <div>{title}</div>
    </Link>
  );
}

export default Image;
