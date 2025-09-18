import { featureItems } from '@/constants/feature-items';
import SocialMedia from '../SocialMedia';
import ContactServices from '@/constants/contact-services';

const Footer = () => {
  return (
    <div className='bg-base-black px-30 py-20 flex justify-between  '>
      {/* left */}
      <div className='flex flex-col gap-10'>
        <div className='max-w-95 flex flex-col gap-5.5'>
          <div className='flex gap-3.75 items-center'>
            <img src='/icons/logo.svg' alt='logo' width={42} height={42} />
            <div className='text-display-md font-extrabold text-base-white'>
              Foody
            </div>
          </div>
          <div className='text-md font-regular text-neutral-25'>
            Enjoy homemade flavors & chef’s signature dishes, freshly prepared
            every day. Order online or visit our nearest branch.
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='text-sm font-extrabold text-base-white'>
            Follow on Social Media
          </div>
          <SocialMedia />
        </div>
      </div>
      {/* Middle */}
      <div className='flex flex-col gap-5 w-50'>
        <div className='text-md font-extrabold text-neutral-25'>Explore</div>

        {featureItems.map((item, index) => (
          <div key={index} className='text-md font-regular text-neutral-25'>
            {item.title}
          </div>
        ))}
      </div>
      {/* right */}
      <div className=' flex flex-col gap-5 w-50'>
        <div className='text-md font-extrabold text-neutral-25'>Help</div>
        {ContactServices.map((item, index) => (
          <div key={index} className='text-md font-regular text-neutral-25'>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
