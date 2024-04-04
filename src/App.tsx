import "./App.css";
import Banner from "./components/Banner";
import SplashScreen from "./components/SplashScreen";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Banner></Banner>
      <SplashScreen></SplashScreen>
      <main className="app scene">
        <section className="app__content content">
          <h1 className="heading">Greetings Cat Lovers!</h1>
          <p className="paragraph">
            Welcome to Cativation! Cativation is a platform getting a cat for a
            day! Cat distribution system yet to choose you? Still hesitating to
            adopt a furball? Experience a premium joy with a cat by renting one!
          </p>
          <p className="paragraph">
            Here at Cativation, you are the boss! You decide the duration of cat
            renting, number of cats, variation of cats etc. Set a date! The cat
            will come to your doorstep!
          </p>
          <p className="paragraph">
            No experience? No worry! Guidebooks and tutorial are given so you
            can get the full experience of what it is like to get a cat!
          </p>
        </section>
      </main>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}
