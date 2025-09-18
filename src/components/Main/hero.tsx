import { Search } from 'lucide-react';
const Hero = () => {
  return (
    <div className='w-full h-[827px] flex-center bg-black relative'>
      <img
        src={'/image/heroImage.png'}
        alt='heroImage'
        className='absolute w-full h-full z-0 opacity-50'
        style={{
          objectFit: 'cover',
        }}
      />

      <div className='relative z-10 flex flex-col gap-5 justify-center items-center'>
        <div className='flex flex-col gap-2 text-base-white'>
          <div className=' text-display-2xl font-extrabold '>
            Explore Culinary Experiences
          </div>

          <div className='text-display-xs font-bold'>
            Search and refine your choice to discover the perfect restaurant.
          </div>
        </div>

        <div className='w-[608px] h-[56px] flex gap-1.25 py-3.25 px-6 bg-base-white rounded-full items-center text-neutral-600'>
          <Search width={20} height={20} />
          <input
            id='search'
            className='text-md font-regular w-full focus:outline-none'
            placeholder='Search restaurants, food and drink'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
