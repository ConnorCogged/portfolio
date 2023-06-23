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
    <div className="shadow-md rounded-xl h-64 m-4 w-2/4">
        <h1 className="text-center pixel rounded-t-xl w-full bg-white text-xl">{children}</h1>
        <img src={imagesrc} className="rounded-xl align-top h-2/6 mx-auto self-center justify-center mt-8"></img>
        <h1 className="mt-2 text-center">{description}</h1>
        <h1 className="text-center text-gray-500 text-xl align-bottom inline">{time}</h1>
    </div>
  );
};
