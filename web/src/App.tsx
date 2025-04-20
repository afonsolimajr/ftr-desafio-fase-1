import CardMyLinks from "./components/card-my-links";
import CardNewLink from "./components/card-new-link";
import Header from "./components/header";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col w-full h-screen items-center">
        <div className="flex flex-col max-w-96 md:max-w-[1024px] w-full h-full items-center gap-3 px-3 pb-3">
          <Header />
          <div className="grid grid-cols-1 md:grid-cols-[24rem_1fr] h-svh gap-4 overflow-hidden">
            <div className="h-fit">
              <CardNewLink />
            </div>
            <div className="overflow-hidden ">
              <CardMyLinks />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
