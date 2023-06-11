export const Button = ({
    color,
    children,
}: {
    color? : string,
    children : string,
}) => {
  return (
    <button className={`text-white border-0 rounded-md p-2 ${color || "bg-black"}`}>{children}</button>
  );
};
