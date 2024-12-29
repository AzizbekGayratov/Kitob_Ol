
import ButtonGroup from "./ButtonGroup";

export default function AboutPart() {
  return (
    <div>
      <div className="max-w-full flex justify-between bg-white">
        <h3 className="font-semibold text-[15px]">Murojaat qilish</h3>
      </div>
      <div className="bg-white flex items-center gap-x-5 px-[34px] max-w-full lg:py-[68px] py-[28px] ">
        <div>
          <img
            src=""
            className="w-[80px] h-[80px] bg-gray-400 border-1 rounded-full"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-y-3">
  <h3 className="font-semibold text-lg md:text-xl lg:text-md">
    Nasibjon Ikromov
  </h3>
  <p className="font-normal text-sm md:text-base lg:text-md text-[#2C3033]">
    Kosonsoy, Namangan
  </p>
  <p className="text-lg md:text-base lg:text-xl font-semibold">
    +998 88 155 55 50
  </p>
</div>

      </div>
      <ButtonGroup />
    </div>
  );
}
