import { Button } from './Button';
export const Header = () => {
  return (
    <div className='mt-6 md:mt-10 flex justify-between items-center'>
      <h2 className='font-semibold text-2xl md:text-3xl '>Art.</h2>
      <input
        className='h-10 hidden md:flex md:w-[322px] lg:w-[644px] outline-none placeholder-[#737373] bg-[#EBEBEB] py-3 px-6 rounded'
        type='text'
        placeholder='Buscar'
      />
      <Button text='ENTRAR' />
    </div>
  );
};
