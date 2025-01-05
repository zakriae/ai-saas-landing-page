import ButtonGradient from "./assets/svg/ButtonGradient.tsx";
import Header from "./component/Header.tsx";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
