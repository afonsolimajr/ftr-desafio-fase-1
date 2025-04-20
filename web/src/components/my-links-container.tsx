import MyLinkItem from "./my-link-item";

export default function MyLinksContainer() {
  const data = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="flex flex-col w-full max-w-full">
      {data.map((item) => {
        return <MyLinkItem key={item} />;
      })}
    </div>
  );
}
