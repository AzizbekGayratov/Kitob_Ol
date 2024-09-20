type InfoProps = {
  label: string;
  value: string;
};

type Data = {
  price: string;
  info: InfoProps[];
};

const data: Data = {
  price: "40 000 uzs",
  info: [
    { label: "Muallif", value: "Nasibjon Ikromov" },
    { label: "Tarjimon", value: "Alisher Haydarov" },
    { label: "Tili", value: "Ingliz tili" },
    { label: "Kategoriya", value: "Darslik" },
    { label: "ISBN(ID)", value: "6156151321" },
    { label: "Nashriyot", value: "Hilol Nashr" },
    { label: "Muqova", value: "Qattiq" },
    { label: "Safiha", value: "366" },
    { label: "Yozuvi", value: "Lotin" },
    { label: "Holati", value: "Foydalanilgan" },
    { label: "Qog'oz formati", value: "A4" },
    { label: "Yili", value: "2021" },
  ],
};

export default function AboutInfoContent() {
  return (
    <div className="sm:pt-10 pt-0 sm:px-10 px-4 pb-[50px]">
      <div className="flex flex-col gap-[14px] sm:mb-[28px] mb-10">
        <span className="text-[#2F2F2F] text-[13px] leading-4">Narx</span>
        <p className="text-xl leading-6 font-bold">{data.price}</p>
      </div>
      <ul className="grid xl:grid-cols-3 gap-y-4 sm:gap-x-5 gap-x-10 md:grid-cols-4 grid-cols-2">
        {data.info.map((item) => (
          <li key={item.label} className="flex flex-col py-2 gap-1">
            <span className="text-[#2F2F2F] sm:text-[13px] text-[11px] leading-4">
              {item.label}
            </span>
            <p className="sm:text-xl text-sm sm:leading-6 leading-4 font-bold">
              {item.value}
            </p>
          </li>
        ))}
      </ul>
      <p className="sm:hidden text-[16px] leading-6 mt-5 text-right">
        Ko'rilgan: 101
      </p>
    </div>
  );
}
