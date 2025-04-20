import { Copy, Trash } from "@phosphor-icons/react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function MyLinkItem() {
  return (
    <div className="flex flex-col max-w-full w-full h-auto">
      <div className="flex w-full max-w-full items-center gap-4">
        <div className="flex flex-col min-w-0">
          <p className="text-lg font-semibold text-primary truncate text-ellipsis overflow-hidden whitespace-nowrap">
            brev.ly/portfolio-dev/3841293470123701923701274
          </p>
          <p className="truncate overflow-hidden text-ellipsis whitespace-nowrap">
            devsite.portfolio.com.br/developer/açsldkjaçsldjfaçsljdfçalsj
          </p>
        </div>
        <div className="flex w-40 min-w-0">
          <span>30 acessos</span>
        </div>
        <div className="flex gap-1">
          <Button variant="secondary" className="w-8 h-8">
            <Copy size={32} />
          </Button>
          <Button variant="secondary" className="w-8 h-8">
            <Trash size={32} />
          </Button>
        </div>
      </div>
      <Separator />
    </div>
  );
}
