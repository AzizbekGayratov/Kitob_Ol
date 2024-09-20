import { setIsProfileUpdating } from "Store/profileSlice/profileSlice";
import { useDispatch } from "react-redux";

export default function UpdateProfileBtn() {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(setIsProfileUpdating(true))}
      className="mt-10 w-full border border-[#2c3033] rounded text-[16px] hover:bg-[#2c30331a] transition-all px-5 cursor-pointer text-[#2C3033] leading-5 py-[18px]"
    >
      Edit
    </button>
  );
}
