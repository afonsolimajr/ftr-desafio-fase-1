import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <div className="flex w-full h-20 md:h-36 items-center justify-center md:justify-start pt-0 md:pt-20 pb-0 md:pb-8 relative">
      <a href="/">
        <img src="/Logo.svg" alt="" className="h-6" />
      </a>
      <div className="absolute top-2 right-2">
        <ModeToggle />
      </div>
    </div>
  );
}
