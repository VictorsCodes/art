interface Props {
  name: string;
  role: string;
  src: string;
}

export const Photos = ({ name, role, src }: Props) => {
  return (
    <div className='mt-6 sm:mt-10 relative'>
      <img
        className='w-full md:w-[396px] h-[484px] rounded-lg'
        src={src}
        alt=''
      />
      <h3 className='absolute top-0 left-0 p-6 text-[#F9F9F9] font-semibold text-xl sm:text-2xl flex flex-col'>
        {name}
        <span className='text-sm sm:text-base font-medium py-2 '>{role}</span>
      </h3>
    </div>
  );
};
