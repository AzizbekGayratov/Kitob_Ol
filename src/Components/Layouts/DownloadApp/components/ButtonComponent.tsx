interface Props {
  img: string;
  title: string;
  subTitle: string;
}

export default function ButtonComponent({ img, title, subTitle }: Props) {
  return (
    <button className="flex items-center gap-[6.4px] p-2 pr-[30px] bg-primary rounded-full">
      <div className="p-3 bg-white rounded-full">
        <img src={img} alt="image of our mobile app" />
      </div>
      <div className="text-white">
        <p className="text-base leading-[120%]">{subTitle}</p>
        <h3 className="text-2xl font-semibold leading-[120%]">{title}</h3>
      </div>
    </button>
  );
}
