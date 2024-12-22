import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function LikeBtn({ bookId }: { bookId: string }) {
  const [like, setLike] = useState(false);
  console.log(bookId);

  return (
    <button
      className="py-[14px] px-4 rounded bg-[#dedddd] hover:shadow-md transition-shadow"
      onClick={() => setLike(!like)}
    >
      {like ? (
        <FavoriteIcon sx={{ color: "#CE3738" }} />
      ) : (
        <FavoriteBorderIcon sx={{ color: "#CE3738" }} />
      )}
    </button>
  );
}
