interface Props {
  text: string;
}

export const Button = ({ text }: Props) => {
  return (
    <>
      <button className='bg-[#3772FF] text-[#F9F9F9] hover:opacity-80 px-7 md:px-16 py-1 md:py-2 text-xs md:text-sm font-bold h-6 md:h-10 rounded'>
        {text}
      </button>
    </>
  );
};
