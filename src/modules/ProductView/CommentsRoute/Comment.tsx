import { CommentProps } from "./CommentsRoute";
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ReplySvg, QuoteSvg } from "assets/images/svg";

export type Profile = {
  name: string;
  lastName: string;
  birthDate: string;
  phone: string;
  email: string;
  gender: "Erkak" | "Ayol";
  avatar: string;
};


export default function Comment({ data }: { data: CommentProps }) {
  const { profile } = useSelector(
    (state: { project: { profile: Profile } }) => state.project
  );

  return (
    <li className="">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="p-5 bg-[#0a03112a] border border-[#0A0311] rounded-full cursor-pointer">
            <FaUserAlt />
          </div>
          <p className="text-[#0A0311] font-semibold leading-6">
            Alisher Haydarov
          </p>
        </div>
        <button className="flex items-center gap-1">
          <span className="hidden sm:block">Javob yozish</span>{" "}
          <img src={ReplySvg} alt="svg" />
        </button>
      </div>
      <div className="sm:pl-[86px] font-Poppins">
        {data.comment && (
          <div className="flex flex-col gap-2">
            <div className="">
              <img src={QuoteSvg} alt="svg" />
            </div>
            <p className="text-lg leading-7 opacity-70 sm:pr-[32px]">
              {data.comment}
            </p>
          </div>
        )}
        {data.answer && (
          <div className="sm:p-4 pb-6 px-2 bg-[#2C30330D] rounded sm:mt-6 mt-10">
            <div className="flex items-center justify-between p-4 sm:mb-6">
              <img src={QuoteSvg} alt="svg" />
              <div className="flex items-center gap-4">
                <p className="text-[#0A0311] font-semibold leading-6">
                  {profile?.name}
                </p>
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                  <img src={profile?.avatar} alt="user avatar" />
                </div>
              </div>
            </div>
            <p className="text-lg leading-7 opacity-70">{data.answer}</p>
          </div>
        )}
      </div>
    </li>
  );
}
