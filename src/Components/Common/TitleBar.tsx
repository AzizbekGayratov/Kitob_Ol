export default function TitleBar({ value }: { value: string }) {
  return (
    <div className="md:px-20 md:py-8 px-4 py-5 flex items-center justify-between border-b border-b-[#2c303333]">
      <h2 className="text-[28px] font-semibold leading-[34px]">{value}</h2>
    </div>
  );
}
