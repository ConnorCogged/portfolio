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
    <div className="relative shadow-md rounded-xl m-4">
        <span className="absolute bottom-0 -translate-x-1/2 left-1/2 text-gray-500 text-2xl">{time}</span>
        <h1 className="text-center pixel rounded-t-xl w-full bg-white text-xl">{children}</h1>
        <img src={imagesrc} className="rounded-xl align-top h-2/6 mx-auto self-center justify-center mt-8 max-h-48"></img>
        <h1 className="mt-2 text-center">{description}</h1>
    </div>
  );
};
