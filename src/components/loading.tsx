import { Skeleton } from './ui/skeleton';

const LoadingSkeleton = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='relative w-[370px] h-[152px] flex gap-5 p-4 '>
        <Skeleton className='relative w-30 h-30 rounded-2xl'>
          <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            Loading...
          </p>
        </Skeleton>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
