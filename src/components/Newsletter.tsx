import { useId, useState } from "react";
import "./Newsletter.css";
import swal from "sweetalert";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const emailId = useId();

  return (
    <aside className="newsletter scene">
      <section className="newsletter__content content">
        <label className="newsletter__label" htmlFor={emailId}>
          Follow us for more news!
        </label>
        <input
          id={emailId}
          className="newsletter__email"
          type="text"
          value={email}
          placeholder="johndoe@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={() => {
            swal({
              icon: "warning",
              text: "Sorry, Cativation is not real.",
            });
          }}
          className="newsletter__submit"
        >
          Join
        </button>
      </section>
    </aside>
  );
}
