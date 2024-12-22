// import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import api from "Services/Api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LikeBtn({ bookId }: { bookId: string }) {
  const [like, setLike] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("token") || null;
  const access_token = token ? JSON.parse(token).access_token : "";

  const deleteFavourite = async () => {
    try {
      await api.delete(`/favourites/delete`, {
        data: { book_id: bookId },
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setLike(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLike = async () => {
    try {
      const response = await api.post(
        `/favourites/create`,
        { book_id: bookId },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      if (response.status === 200) {
        setLike(true);
      } else if (response.status === 500) {
        alert("error");
        await deleteFavourite();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className="py-[14px] px-4 rounded bg-[#dedddd] hover:shadow-md transition-shadow"
      onClick={!token ? () => navigate("/authorization/phone") : handleLike}
    >
      {like ? (
        <FavoriteIcon sx={{ color: "#CE3738" }} />
      ) : (
        <FavoriteBorderIcon sx={{ color: "#CE3738" }} />
      )}
    </button>
  );
}
