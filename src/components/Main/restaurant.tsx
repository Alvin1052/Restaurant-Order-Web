import { getRecommendResto } from '@/services/services';
import type { RestaurantType } from '@/types/restaurantTypes';
import { useQuery } from '@tanstack/react-query';
import { Dot, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoadingSkeleton from '../loading';
import { Button } from '../ui/button';
const Restaurant = () => {
  const { data } = useQuery<RestaurantType[]>({
    queryKey: ['restaurants'],
    queryFn: async () =>
      await getRecommendResto().then((res) => res.data.recommendations),
  });

  console.log(data);
  if (!data) return LoadingSkeleton();
  const list = data;
  return (
    <div className='flex flex-col justify-center gap-8 pb-25 '>
      <div className='text-display-md font-extrabold'>Recommended</div>
      <div className='flex flex-wrap gap-5 justify-between items-center'>
        {list.map((item, index) => (
          <Link
            to={`/restaurant/${item.id}`}
            key={index}
            className='flex gap-3 p-4 w-92.5 rounded-2xl bg-white drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out'
          >
            <img
              src={item.images[1] || '/image/logorestaurant.svg'}
              alt={item.name}
              className='w-30 h-30 object-cover rounded-2xl '
            />
            <div className='flex flex-col gap-0.5'>
              <div className='text-lg font-extrabold'>{item.name}</div>
              <div className='flex gap-2  items-center'>
                <Star
                  className='fill-amber-500 text-amber-500'
                  width={24}
                  height={24}
                />
                <p>{item.star.toFixed(1)}</p>
              </div>
              <div className='flex text-md font-regular items-center'>
                <div>{item.place}</div>
                <Dot />
                <div>{`10km`}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className='flex justify-center'>
        <Button
          variant={'outline'}
          className='w-40 h-12 rounded-full text-md font-bold'
        >
          Show More
        </Button>
      </div>
    </div>
  );
};

export default Restaurant;
