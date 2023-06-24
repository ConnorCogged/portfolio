export const Experience = ({
    description,
    children,
    imagesrc,
    time
}: {
    description? : string,
    children : string,
    imagesrc : string,
    time : string,
}) => {
  return (
    <div className="dark:bg-slate-800 shadow-lg rounded-xl m-4">
        <h1 className="dark:text-white text-center rounded-t-xl w-full bg-gray-100 dark:bg-slate-700 text-xl">{children}</h1>
        <img src={imagesrc} className="rounded-xl align-top h-2/6 w-1.5/12 mx-auto self-center justify-center mt-8 max-h-48"></img>
        <h1 className="dark:text-white mt-2 text-center">{description}<br/><span className="text-center text-gray-500 text-xl">{time}</span></h1>
    </div>
  );
};
