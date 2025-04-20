import CardMyLinks from "./components/card-my-links";
import CardNewLink from "./components/card-new-link";

function App() {
  return (
    <div className="flex flex-col w-full h-screen items-center pt-3 gap-3">
      <h1 className="text-3xl font-bold">Desafio fase 1</h1>
      <CardNewLink />
      <CardMyLinks />
    </div>
  );
}

export default App;
