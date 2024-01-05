import { useEffect } from "react";
import Image from "../Image/Image";
import "./Gallery.css";
import axios from "axios";
import { useState } from "react";

function Gallery() {
  const [imageData, setImageData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function downloadImageData() {
    const res = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20`
    );

    const photoResults = res.data.photos;
    const photoDetails = photoResults.map((photo) => {
      return {
        id: photo.id,
        title: photo.title,
        url: photo.url,
      };
    });
    console.log(photoDetails);

    setImageData(photoDetails);

    setIsLoading(false);
  }

  console.log("Data.....", imageData);

  useEffect(() => {
    downloadImageData();
  }, []);

  return (
    <div className="gallery-wrapper">
      {/* <Image
        url="https://api.slingacademy.com/public/sample-photos/3.jpeg"
        title="Party about different guess bill too owner"
        id="3"
      /> */}

      {isLoading
        ? "Loading ........."
        : imageData.map((e) => {
            <Image url={e.url} title={e.title} id={e.id} key={e.id} />;
          })}
    </div>
  );
}

export default Gallery;
