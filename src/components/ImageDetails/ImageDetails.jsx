import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./ImageDetails.css";

function ImageDetails() {
  let { id } = useParams();
  const [photoData, setPhotoData] = useState({});

  async function downloadData() {
    const res = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/photos/${id}`
    );

    const data = res.data.photo;
    setPhotoData({
      url: data.url,
      title: data.title,
      desc: data.description,
    });
  }
  console.log(photoData);

  useEffect(() => {
    downloadData();
  }, []);

  return (
    <div style={{ fontSize: "20px" }} className="image-detail-container">
      <img src={photoData.url} />
      <div>
        <h4>{photoData.title}</h4>
        <p>{photoData.desc}</p>
      </div>
    </div>
  );
}

export default ImageDetails;
