import { featureItems } from '@/constants/feature-items';
import { Link } from 'react-router-dom';

const Feature = () => {
  return (
    <div className='custom-container'>
      <div className='flex justify-between gap-11.5 items-center flex-wrap'>
        {featureItems.map((item) => (
          <Link
            to={item.link}
            key={item.title}
            className='flex flex-col items-center gap-1.5 justify-center w-40 hover:scale-105 transition-all duration-300 ease-in-out '
          >
            <div className='h-25 flex  justify-center items-center shadow-md rounded-2xl '>
              <img src={item.src} alt={item.title} className='px-12 ' />
            </div>
            <p className='text-lg font-bold'>{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Feature;
