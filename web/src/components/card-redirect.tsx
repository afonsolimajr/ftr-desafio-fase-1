import { Card, CardContent } from "./ui/card";

export default function CardRedirect() {
  return (
    <Card className="w-full max-w-[580px]">
      <CardContent className="flex flex-col gap-6 items-center py-16 px-12">
        <img src="public/Logo_Icon.svg" />
        <h1>Redirecionando...</h1>
        <span className="text-center">
          O link será aberto automaticamente em alguns instantes. Não foi
          redirecionado? <a href="#">Acesse aqui</a>
        </span>
      </CardContent>
    </Card>
  );
}
