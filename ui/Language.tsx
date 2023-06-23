export const Language = ({
    languageName,
    time,
}: {
    languageName : string,
    time : string,
}) => {
  let img = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${languageName.toLowerCase()}/${languageName.toLowerCase()}-original.svg`
  console.log(img)
  return (
    <div className='align-top inline-block text-center'>
        <img className='w-24 mt-4 ml-4 mr-4' src={img}/>
        <p className='block text-sm font-thin'>{languageName}</p>
        <p className='block text-2xl font-bold'>{time}</p>
    </div>
  );
};
