import { getProfile } from '@/services/services';
import { useQuery } from '@tanstack/react-query';
import { ShoppingBasketIcon } from 'lucide-react';

const Header = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['Profile'],
    queryFn: async () => await getProfile().then((res) => res.data),
  });
  console.log(data);

  if (isLoading) return <div>Loading</div>;

  return (
    <div className='w-full h-[80px]   flex-center shadow-lg   '>
      <div className='flex justify-between items-center w-full max-w-[1440px] '>
        <div className='flex gap-3.75 items-center'>
          <img src='/icons/logo.svg' alt='logo' width={42} height={42} />
          <div className='text-display-md font-extrabold text-base-black'>
            Foody
          </div>
        </div>
        <div className='flex justify-between items-center gap-6'>
          <ShoppingBasketIcon size={32} />

          {/* Profile */}
          <div className='flex items-center gap-3  '>
            <div className='w-12 h-12 rounded-full bg-neutral-500 flex-center'>
              {data.id}
            </div>
            <div className='flex flex-col '>
              <div className='text-lg font-semibold'>{data.name}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
