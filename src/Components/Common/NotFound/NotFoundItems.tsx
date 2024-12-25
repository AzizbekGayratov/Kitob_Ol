import { NotFoundGif } from "assets/images/gif";

export default function NotFoundItems() {
  return (
    <div className="w-full flex items-center justify-center">
      <img
        src={NotFoundGif}
        alt="not found"
        className="lg:width-[300px] lg:h-[300px]"
      />
    </div>
  );
}
