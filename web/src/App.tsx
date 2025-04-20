import CardMyLinks from "./components/card-my-links";
import CardNewLink from "./components/card-new-link";
import CardNotFound from "./components/card-not-found";
import CardRedirect from "./components/card-redirect";

function App() {
  return (
    <div className="flex flex-col w-full h-screen items-center p-3 gap-3">
      <h1 className="text-3xl font-bold">Desafio fase 1</h1>
      <CardNewLink />
      <CardMyLinks />
      <CardRedirect />
      <CardNotFound />
    </div>
  );
}

export default App;
