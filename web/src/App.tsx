import CardMyLinks from "./components/card-my-links";
import CardNewLink from "./components/card-new-link";
import CardNotFound from "./components/card-not-found";
import CardRedirect from "./components/card-redirect";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col w-full h-screen items-center p-3 gap-3">
        <h1 className="text-3xl font-bold">Desafio fase 1</h1>
        <ModeToggle />
        <CardNewLink />
        <CardMyLinks />
        <CardRedirect />
        <CardNotFound />
      </div>
    </ThemeProvider>
  );
}

export default App;
