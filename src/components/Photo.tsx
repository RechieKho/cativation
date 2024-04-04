import "./Photo.css";
import { CSSProperties } from "react";

export default function Photo({
  className,
  url,
  alt,
  text,
  style,
}: {
  className?: string;
  url?: string;
  alt?: string;
  text?: string;
  style?: CSSProperties | undefined;
}) {
  return (
    <section className={`photo ${className}`}>
      <img
        style={style}
        className="photo__image"
        src={url || ""}
        alt={alt || "Photo"}
      />
      <span className="photo__text">{text}</span>
    </section>
  );
}
