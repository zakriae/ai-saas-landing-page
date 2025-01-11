import ButtonGradient from "./assets/svg/ButtonGradient.tsx";
import Benifits from "./component/Benifits.tsx";
import Collaboration from "./component/Collaboration.tsx";
import Footer from "./component/Footer.tsx";
import Header from "./component/Header.tsx";
import Hero from "./component/Hero.tsx";
import Pricing from "./component/Pricing.tsx";
import Roadmap from "./component/Roadmap.tsx";
import Services from "./component/Services.tsx";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero/>
        <Benifits/>
        <Collaboration/>
        <Services/>
        <Pricing/>
        <Roadmap/>
        <Footer/>
      </div>

      <ButtonGradient />

    </>
  );
}

export default App;
