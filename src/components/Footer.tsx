export const Footer = () => {
  return (
    <div className='my-10 sm:mt-20 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4'>
      <h2 className='font-semibold text-2xl sm:text-3xl text-center '>Art.</h2>
      <ul className='flex justify-between sm:gap-14'>
        <li className='font-medium text-xs sm:text-lg'>INÍCIO</li>
        <li className='font-medium text-xs sm:text-lg'>BUSCAR</li>
        <li className='font-medium text-xs sm:text-lg'>EXPLORAR</li>
        <li className='font-medium text-xs sm:text-lg'>SOBRE NÓS</li>
      </ul>
    </div>
  );
};
