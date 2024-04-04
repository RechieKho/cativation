import "./Banner.css";
import Logo from "./Logo";

export default function Banner() {
  return (
    <header className="scene banner">
      <section className="content banner__content">
        <Logo></Logo>
      </section>
    </header>
  );
}
