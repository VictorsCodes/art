import { InfoItem } from './InfoItem';
import image from '../assets/images/rightsideImage.png';

export const Main = () => {
  return (
    <div className='flex justify-between'>
      {/* Left-Side */}
      <div className='mt-12 md:mt-28 flex flex-col'>
        <h1 className='text-2xl md:text-5xl max-w-xl font-semibold overflow-y-hidden'>
          Descubra novos artistas e suas obras
        </h1>
        <span className='pt-2 md:pt-4 text-sm font-normal text-[#737373]'>
          Uma nova geração de jovens artistas surgem
        </span>
        <button className='mt-8 bg-[#3772FF] text-[#F9F9F9] hover:opacity-80 py-2 md:py-2 text-xs md:text-sm sm:w-[100px] font-bold h-8 md:h-10 rounded'>
          EXPLORAR
        </button>

        {/* Informations */}
        <div className='mt-10 md:mt-12 grid grid-cols-3 gap-8 md:gap-10 max-w-md'>
          <InfoItem title='+2 mil' subtitle='Artistas' />
          <InfoItem title='+7 mil' subtitle='Vendas' />
          <InfoItem title='+16 mil' subtitle='Avaliações' />
        </div>
      </div>

      {/* Image will shows depending on screen size*/}
      <img
        className='mt-20 hidden lg:block '
        width={396}
        height={436}
        src={image}
        alt=''
      />
    </div>
  );
};
