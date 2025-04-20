import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function CardNewLink() {
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Novo Link</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Label>LINK ORIGINAL</Label>
        <Input placeholder="www.exemplo.com.br" />
        <Label>LINK ENCURTADO</Label>
        <Input placeholder="brev.ly/" />
        <Button>Salvar Link</Button>
      </CardContent>
    </Card>
  );
}
