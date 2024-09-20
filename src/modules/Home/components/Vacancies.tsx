import LikeBtn from "./LikeBtn";

export default function Vacancies() {
  const arr = new Array(12).fill(null);

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-x-10 lg:gap-y-6 gap-4 px-4">
      {arr.map((_, index) => (
        <div key={index} className="rounded bg-white pt-6 pb-12 px-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-primary font-medium text-xl leading-5 mb-2">
                Copywriter
              </h3>
              <p className="text-primary text-xs opacity-80">Namangan shahar</p>
            </div>
            <LikeBtn />
          </div>
          <ul className="mt-2 mb-4 flex flex-col gap-1 pl-4 list-disc">
            <li className="text-[12px] leading-[15px] text-primary opacity-80">
              Doimiy
            </li>
            <li className="text-[12px] leading-[15px] text-primary opacity-80">
              Ma’lum soatlarda
            </li>
          </ul>
          <span className="text-[#CE3738] text-2xl font-semibold leading-7">
            700$ - 1200$
          </span>
        </div>
      ))}
    </div>
  );
}
