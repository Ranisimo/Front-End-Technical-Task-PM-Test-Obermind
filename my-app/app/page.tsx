import Header from "components/Header";
import Footer from "components/Footer";

export default function Home() {
  return (
    <div className="homepage">
      <Header />
      <main>
        <section>
          <img
            className="splash-image"
            src="/main.svg"
            alt="Main logo"
          />
          <img
            className="splash-image-overlay"
            src="/splash.svg"
            alt="Main logo"
          />
        </section>
        <section>
           <img
              className="section-image"
              src="/access.svg"
              alt="Main logo"
            />
        </section>
      </main>
      <Footer />
    </div>
  );
}
