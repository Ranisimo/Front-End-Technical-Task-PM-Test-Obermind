<style>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
</style>
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
        <section className="info-section">
        </section>
        <section className="empower-section">
        </section>
        <section className="seamless-withdrawals-section">
        </section>
      </main>
      <Footer />
    </div>
  );
}
