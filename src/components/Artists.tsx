import { Photos } from './Photos';
import sabrinaImg from '../assets/images/sabrina.png';
import eleanorImg from '../assets/images/eleanor.png';
import leslieImg from '../assets/images/leslie.png';
import clarisseImg from '../assets/images/clarisse.jpg';

export const Artists = () => {
  return (
    <div className='mt-12 md:mt-20 '>
      <h2 className='text-2xl md:text-4xl font-medium overflow-y-hidden'>
        Artistas
      </h2>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:gap-10'>
        <Photos src={sabrinaImg} name='Sabine Lowe' role='Design e Fotógrafa' />
        <Photos
          src={eleanorImg}
          name='Eleanor Pena'
          role='Escritora e Design'
        />
        <Photos
          src={leslieImg}
          name='Leslie Alexander'
          role='Diretora de arte'
        />
        <Photos
          src={clarisseImg}
          name='Clarisse Mayer'
          role='Freelancer e Design'
        />
      </div>
    </div>
  );
};
