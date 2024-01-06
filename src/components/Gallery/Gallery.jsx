import { useEffect } from "react";
import Image from "../Image/Image";
import "./Gallery.css";
import axios from "axios";
import { useState } from "react";

function Gallery() {
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // URL to Resource
  const source_Url = `https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20`;

  async function downloadImageData() {
    const res = await axios.get(source_Url); // Fetch URL data Using axios

    const photoResults = res.data.photos;
    const photoDetails = photoResults.map((photo) => {
      // Get data and set its properties as needed
      return {
        id: photo.id,
        title: photo.title,
        url: photo.url,
      };
    });

    setImageData(photoDetails); // Set Data into  setImageData

    setIsLoading(false);
  }

  useEffect(() => {
    downloadImageData();
  }, []);

  return (
    <div className="gallery-wrapper">
      {isLoading
        ? "Loading ........."
        : imageData.map((e) => {
            return <Image url={e.url} title={e.title} id={e.id} key={e.id} />;
          })}
    </div>
  );
}

export default Gallery;
