import "./Logo.css";
import { FaPaw } from "react-icons/fa";

export default function Logo() {
  return (
    <span className="logo">
      <FaPaw className="logo__graphics" />
      <span className="logo__text">Cativation</span>
    </span>
  );
}
