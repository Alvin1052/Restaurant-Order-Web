import Login from '@/components/login';
const LoginPage = () => {
  return (
    <div className='flex-center max-w-[1440px] max-h-[1024px]'>
      <div className='w-[720px] h-[1024px]'>
        <img
          src={'/image/coverImage.svg'}
          alt='lol'
          className='w-[720px] h-[1024px]'
        />
      </div>
      <div className='w-1/2 flex-center '>
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
