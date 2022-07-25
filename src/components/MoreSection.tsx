import imageOne from '../assets/images/imageOne.png';
import imageTwo from '../assets/images/imageTwo.png';
import imageThree from '../assets/images/imageThree.png';

export const MoreSection = () => {
  return (
    <div className='flex flex-col mt-10 lg:mt-20 lg:flex-row lg:justify-between lg:items-center'>
      <div className='flex flex-col sm:flex-row gap-4'>
        <img
          className='object-fill w-full sm:w-52 h-48'
          src={imageOne}
          alt=''
        />
        <img
          className='object-fill w-full sm:w-52 h-48'
          src={imageTwo}
          alt=''
        />
        <img
          className='object-fill w-full sm:w-52 h-48'
          src={imageThree}
          alt=''
        />
      </div>
      <div className='mt-8 lg lg:max-w-[300px]'>
        <h2 className='text-xl lg:text-4xl font-medium overflow-y-hidden'>
          Confira as ultimas coleções
        </h2>
        <button className='bg-[#3772FF] hover:opacity-80 w-full  mt-4 text-[#F9F9F9] py-2.5 rounded text-xs font-bold'>
          VER MAIS
        </button>
      </div>
    </div>
  );
};
