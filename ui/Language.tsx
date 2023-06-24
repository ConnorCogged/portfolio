export const Language = ({
    languageName,
    time,
}: {
    languageName : string,
    time : string,
}) => {
  let img = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${languageName.toLowerCase()}/${languageName.toLowerCase() == "tailwindcss" ? `${languageName.toLowerCase()}-plain` : `${languageName.toLowerCase()}-original`}.svg`
  return (
    <div className='align-top inline-block text-center mx-auto justify-items-center items-center'>
        <img className='w-16 align-top inline-block text-center mx-auto' src={img}/>
        <p className='dark:text-white block text-sm font-thin'>{languageName}</p>
        <p className='dark:text-white block text-xl font-bold'>{time}</p>
    </div>
  );
};
