import { Card, CardContent } from "./ui/card";

export default function CardNotFound() {
  return (
    <Card className="w-full max-w-[580px]">
      <CardContent className="flex flex-col gap-6 items-center py-16 px-12">
        <img src="public/404.svg" />
        <h1>Link não encontrado</h1>
        <span className="text-center">
          O link que você esta tentando acessar não existe, foi removido ou é
          uma URL inválida. Saiba mais em <a href="#">brev.ly</a>
        </span>
      </CardContent>
    </Card>
  );
}
