import Feature from '@/components/Main/feature';
import Footer from '@/components/Main/footer';
import Hero from '@/components/Main/hero';
import Restaurant from '@/components/Main/restaurant';
import { useAuthGuard } from '@/Functions/GateGuards';

const Home = () => {
  useAuthGuard();
  return (
    <div className='flex flex-col gap-12 '>
      <Hero />
      <div className='custom-container flex flex-col gap-12'>
        <Feature />
        <Restaurant />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
