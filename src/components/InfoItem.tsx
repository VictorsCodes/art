interface Props {
  title: string;
  subtitle: string;
}

export const InfoItem = ({ title, subtitle }: Props) => {
  return (
    <div className='flex flex-col max-w-[120px] text-center'>
      <h2 className='text-2xl md:text-3xl font-semibold'>{title}</h2>
      <p className='text-sm md:text-base text-center font-medium text-[#737373] pt-2'>
        {subtitle}
      </p>
    </div>
  );
};
