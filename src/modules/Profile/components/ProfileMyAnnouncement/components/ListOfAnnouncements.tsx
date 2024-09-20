import { RiArrowRightWideFill } from "react-icons/ri";
import { Link } from "react-router-dom";
interface ListItemProps {
  name: string;
  image: string;
  data: string;
  id: number;
}

export default function ListOfAnnouncements({
  data,
}: {
  key: number;
  data: ListItemProps;
}) {
  return (
    <li>
      <Link
        to={`/announcements/${data.name}`}
        className="md:pt-[10px] md:pl-[10px] md:pb-[10px] md:pr-10 p-4 bg-[#2c30331a] rounded-[10px] flex items-center justify-between"
      >
        <div className="flex items-center gap-[32px]">
          <div className="hidden md:block">
            <img src={data.image} alt="image" width={100} height={100} />
          </div>
          <h3 className="text-textColor font-Poppins md:text-[28px] text-[16px] leading-6 md:leading-[42px]">
            {data.name}
          </h3>
        </div>
        <div className="flex items-center gap-[32px]">
          <span className="hidden md:block text-textColor text-[20px] font-Poppins font-light leading-[30px]">
            {data.data}
          </span>
          <RiArrowRightWideFill className="text-textColor" size={20} />
        </div>
      </Link>
    </li>
  );
}
