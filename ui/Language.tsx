export const Language = ({
    languageName,
    time,
}: {
    languageName : string,
    time : string,
}) => {
  let img = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${languageName.toLowerCase()}/${languageName.toLowerCase() == "tailwindcss" ? `${languageName.toLowerCase()}-original-wordmark` : `${languageName.toLowerCase()}-original`}.svg`
  console.log(img)
  return (
    <div className='align-top inline-block text-center'>
        <img className='w-2/12 align-top inline-block text-center mx-auto' src={img}/>
        <p className='block text-sm font-thin'>{languageName}</p>
        <p className='block text-xl font-bold'>{time}</p>
    </div>
  );
};
