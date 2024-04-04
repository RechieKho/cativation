import { useEffect, useState } from "react";
import "./SplashScreen.css";
import initialCatImage from "../assets/initial-cat.png";

import Photo from "./Photo";

export default function SplashScreen() {
  const [catImage, setCatImage] = useState(initialCatImage);

  useEffect(() => {
    const updateCatImage = () =>
      (async () => {
        const response = await fetch(
          `https://cataas.com/cat?width=250&height=250`
        );
        setCatImage(URL.createObjectURL(await response.blob()));
      })();

    const id = setInterval(updateCatImage, 5000);
    return () => {
      clearInterval(id);
    };
  });

  return (
    <section className="splash-screen scene">
      <section className="splash-screen__content content">
        <span className="splash-screen__quote">
          Boost your day with Paw-erful Cats
        </span>
        <Photo
          className="splash-screen__photo"
          style={{ width: "300px", height: "300px" }}
          url={catImage}
          text="Meow"
          alt="Cat picture"
        ></Photo>
        <div className="splash-screen__curve">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="splash-screen__curve__svg"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="splash-screen__curve__path"
            ></path>
          </svg>
        </div>
      </section>
    </section>
  );
}
