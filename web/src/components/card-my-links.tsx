import { DownloadSimple } from "@phosphor-icons/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import MyLinksContainer from "./my-links-container";

export default function CardMyLinks() {
  return (
    <Card className="flex w-full h-full">
      <CardHeader>
        <div className="flex w-full h-auto justify-between items-center pb-3">
          <CardTitle>Meus Links</CardTitle>
          <Button variant="secondary" className="w-auto">
            <DownloadSimple size={32} /> Baixar CSV
          </Button>
        </div>
        <Separator />
      </CardHeader>
      <div className="flex-1 overflow-hidden">
        <CardContent className="h-full flex flex-col gap-3 pt-4 pb-6 w-full max-w-full overflow-hidden">
          {/* <Link size={32} />
        <span>AINDA NÃO EXISTEM LINKS CADASTRADOS</span> */}
          <MyLinksContainer />
        </CardContent>
      </div>
    </Card>
  );
}
