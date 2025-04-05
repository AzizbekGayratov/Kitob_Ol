// import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import api from "Services/Api";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "Services/Api";
import { useNavigate } from "react-router-dom";
import { safeParse } from "lib/utils";

export default function LikeBtn({
  bookId,
  isFavorite,
  isBook,
}: {
  bookId: string;
  isFavorite: boolean;
  isBook: boolean;
}) {
  const [like, setLike] = useState(isFavorite);

  const navigate = useNavigate();
  const token = safeParse(window.localStorage.getItem("token"));
  const access_token = token?.access_token;

  const responseData = isBook
    ? {
        book_id: bookId,
      }
    : { vacancy_id: bookId };
        

  const deleteFavourite = async () => {
    try {
      const response = await api.delete(`/favourites/delete`, {
        data: responseData,
        headers: {
          Authorization: `${access_token}`,
        },
      });
      if (response.status === 200) {
        setLike(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLike(false);
    }
  };
  const handleLike = async () => {
    try {
      const response = await api.post(
        `/favourites/create`,
        responseData,
        {
          headers: {
            Authorization: `${access_token}`,
          },
        }
      );

      if (response.status === 200) {
        setLike(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className="py-[14px] px-4 rounded bg-[#dedddd] hover:shadow-md transition-shadow"
      onClick={
        !token
          ? () => navigate("/authorization/phone")
          : like
          ? deleteFavourite
          : handleLike
      }
      // onClick={() => {
      //   if (like === "true") {
      //     setLike("false");
      //   } else {
      //     setLike("true");
      //   }
      // }}
    >
      {like ? (
        <FavoriteIcon sx={{ color: "#CE3738" }} />
      ) : (
        <FavoriteBorderIcon sx={{ color: "#CE3738" }} />
      )}
    </button>
  );
}
