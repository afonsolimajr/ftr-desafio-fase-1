import MyLinkItem from "./my-link-item";

export default function MyLinksContainer() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div className="flex flex-col w-full max-w-full overflow-y-auto overflow-x-hidden pr-2">
      {data.map((item) => {
        return <MyLinkItem key={item} />;
      })}
    </div>
  );
}
