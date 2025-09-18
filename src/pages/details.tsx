import LoadingSkeleton from '@/components/loading';
import Footer from '@/components/Main/footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAppSelector } from '@/hooks/hook';
import { getRestoById } from '@/services/services';
import type { CommentType } from '@/types/InteractionType';
import { catMenu, type MenuType } from '@/types/restaurantTypes';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { Dot, Minus, Plus, Share2, Star } from 'lucide-react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { restoId } = useParams();
  const { data, isError, isLoading } = useQuery({
    queryKey: ['resto', restoId],
    queryFn: async () =>
      await getRestoById({ id: Number(restoId) }).then((res) => res.data),
  });

  if (isLoading) return <LoadingSkeleton />;
  if (isError) return <div>Error</div>;
  console.log(data);
  return (
    <div className='mt-32 '>
      <div className='custom-container flex flex-col gap-8'>
        {/* Profile */}
        <div className='w-full flex flex-col gap-8'>
          {/* Image */}
          <div className='flex gap-5 w-full'>
            <img
              src={`${data.images[0]}`}
              alt='image-0'
              className='object-cover w-[651px] h-[470px] rounded-2xl'
            />

            <div className='max-w-[529px] w-full flex flex-col gap-5'>
              <img
                src={`${data.images[1]}`}
                alt='image-0'
                className='w-full h-[302px] object-cover rounded-2xl'
              />

              <div className='w-full flex gap-5'>
                <img
                  src={`${data.images[2]}`}
                  alt='image-0'
                  className='w-full h-[148px] object-cover rounded-2xl'
                />
                <img
                  src={`${data.images[2]}`}
                  alt='image-0'
                  className='w-full h-[148px] object-cover rounded-2xl'
                />
              </div>
            </div>
          </div>
          {/* Profile */}
          <div className='flex justify-between items-center gap-4'>
            <img
              src={`${data.logo}`}
              alt='image-0'
              className=' object-cover rounded-full w-30 h-30 '
            />

            <div className='flex flex-col gap-0.5  w-full'>
              <div className='text-lg font-extrabold'>{data.name}</div>
              <div className='flex gap-2  items-center'>
                <Star
                  className='fill-amber-500 text-amber-500'
                  width={24}
                  height={24}
                />
                <p>{data.star.toFixed(1)}</p>
              </div>
              <div className='flex text-md font-regular items-center'>
                <div>{data.place}</div>
                <Dot />
                <div>{`10km`}</div>
              </div>
            </div>
            <Button
              variant={'ghost'}
              className='flex gap-2 items-center justify-center w-35 h-11 border rounded-full border-neutral-300 '
            >
              <Share2 className='text-neutral-950' width={24} height={24} />
              <p className='text-md font-bold'>Share</p>
            </Button>
          </div>
        </div>
        {/* Devider */}
        <div className='w-full border border-neutral-300 rounded-full' />
        {/* Menus */}
        <div className='flex gap-6 flex-col'>
          <p className='text-display-lg font-extrabold text-neutral-950'>
            Menu
          </p>

          <Tabs defaultValue='all' className='flex flex-col gap-6 '>
            <TabsList className='bg-transparent flex gap-3 w-fit '>
              {catMenu.map((item) => (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className='px-4 py-2 border border-neutral-300 rounded-full text-md font-semibold text-neutral-950 data-[state=active]:bg-[#FFECEC] data-[state=active]:text-primary-100 data-[state=active]:border-primary-100'
                >
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {catMenu.map((Category) => (
              <TabsContent
                key={Category.value}
                value={Category.value}
                className='flex flex-wrap gap-5'
              >
                {Category.value === 'all' && data.menus.length > 0 ? (
                  data.menus.map((item: MenuType) => (
                    <MenuCart key={item.id} item={item} />
                  ))
                ) : data.menus.filter(
                    (menu: MenuType) => menu.type === Category.value
                  ).length > 0 ? (
                  data.menus
                    .filter((menu: MenuType) => menu.type === Category.value)
                    .map((item: MenuType) => (
                      <MenuCart key={item.id} item={item} />
                    ))
                ) : (
                  <div>Not Available</div>
                )}
              </TabsContent>
            ))}

            {data.menus.length > 8 && (
              <div className='flex justify-center items-center'>
                <Button variant={'outline'} size={'buttonmore'}>
                  Show More
                </Button>
              </div>
            )}
          </Tabs>
        </div>
        {/* Devider */}
        <div className='w-full border border-neutral-300 rounded-full' />
        {/* Review */}
        <div className='flex flex-col gap-6'>
          {/* Title */}
          <div className='flex flex-col gap-3'>
            <div className=' text-display-lg font-extrabold'>Review</div>
            <div className='flex items-center gap-1'>
              <Star className='fill-amber-500 text-amber-500' />
              <p className='text-xl font-extrabold'>{`${data.averageRating.toFixed(
                1
              )} (${data.totalReviews} Ulasan)`}</p>
            </div>
          </div>
          {/* Comment */}
          <div className='flex flex-col '>
            <div className='flex gap-5 flex-wrap pb-6'>
              {data.reviews.slice(0, 6).map((items: CommentType) => (
                <CommentCart data={items} key={items.id} />
              ))}
            </div>
            {data.reviews.length > 6 && (
              <div className='flex justify-center items-center'>
                <Button variant={'outline'} size={'buttonmore'}>
                  Show More
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* footer */}
      <div className='pt-12'>
        <Footer />
      </div>
    </div>
  );
};

export default Detail;

const CommentCart = ({ data }: { data: CommentType }) => {
  return (
    <div className='flex flex-col gap-4 w-[590px] shadow-lg rounded-2xl p-4'>
      {/* Profile */}
      <div className='flex items-center gap-3  '>
        <div className='w-16 h-16 rounded-full bg-neutral-500 flex-center'>
          {data.id}
        </div>
        <div className='flex flex-col '>
          <div className='text-lg font-extrabold'>{data.user.name}</div>
          <div className='text-md font-regular'>{`${format(
            data.createdAt,
            'dd MMMM yyyy , HH:mm'
          )}`}</div>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-0.5'>
          {Array(data.star)
            .fill(0)
            .map((_, index) => (
              <Star key={index} className='fill-amber-500 text-amber-500' />
            ))}
        </div>
        <div className='text-md font-regular text-neutral-950'>
          {data.comment}
        </div>
      </div>
    </div>
  );
};
const MenuCart = ({ item }: { item: MenuType }) => {
  const { cartList } = useAppSelector((state) => state.cart);

  const quantityCart =
    cartList
      .find((cartItem) => cartItem.menus)
      ?.menus.find((menu) => menu.quantity)?.quantity || 0;

  const [quantity, setQuantity] = useState(quantityCart);

  // const isFound = cartList.some((cartItem) =>
  //   cartItem.menus?.some((menu) => menu.id === item.id)
  // );

  const handleAddToCart = () => {
    setQuantity(() => quantity + 1);
  };

  const handleReduceFromCart = () => {
    setQuantity(() => quantity - 1);
  };

  return (
    <div className='max-w-[285px] w-full rounded-2xl  shadow-lg'>
      <img
        src={`${item.image}`}
        alt={item.foodName}
        className='w-full h-[285px] rounded-t-2xl object-cover'
      />
      <div className='flex w-full justify-between p-4 items-center gap-3'>
        <div className='flex flex-col justify-center overflow-hidden'>
          <div className='text-md font-medium truncate'>{item.foodName}</div>
          <div className='text-lg font-extrabold'>{item.price}</div>
        </div>

        {quantity > 0 ? (
          <div className='flex-center gap-4 '>
            <Button
              variant={'outline'}
              size={'icon'}
              className='border border-neutral-300'
              onClick={handleReduceFromCart}
            >
              <Minus />
            </Button>
            <div className='text-lg font-semibold'>{quantity}</div>
            <Button
              variant={'outline'}
              size={'icon'}
              className='bg-primary-100 text-base-white'
              onClick={handleAddToCart}
            >
              <Plus />
            </Button>
          </div>
        ) : (
          <Button
            className='bg-primary-100 text-white rounded-full h-10 w-20'
            onClick={() => setQuantity(quantity + 1)}
          >
            Add
          </Button>
        )}
      </div>
    </div>
  );
};
