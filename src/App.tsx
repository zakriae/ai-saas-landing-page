import ButtonGradient from "./assets/svg/ButtonGradient.tsx";
import Button from "./component/Button.tsx";

function App() {
  return (
    <>
      <h5 className="text-3xl font-bold underline ">hello world</h5>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Button className="mt-10" >Something</Button>
      </div>
    
      <ButtonGradient />
    </>
  );
}

export default App;
