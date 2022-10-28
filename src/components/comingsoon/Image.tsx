import Image from 'next/image';

const Comingsoonimage = () => {
  return (
    <div className='w-[300px] self-center sm:w-[400px] md:w-[500px] lg:w-[623px]'>
      <Image
        alt=''
        src='/comingsoon/comingsoon-img1.svg'
        width={623}
        height={482}
        sizes='100vw'
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default Comingsoonimage;
