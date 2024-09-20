import { Pagination } from "@mui/material";
import { useState } from "react";

export default function PaganitionComponent() {
  const [windowSize, setWindowSize] = useState(window.screen.width);

  window.onresize = () => {
    setWindowSize(window.innerWidth);
  };

  return (
    <div className="flex justify-center mt-10 sm:mt-20">
      <Pagination
        count={8}
        variant="outlined"
        shape="rounded"
        size="medium"
        siblingCount={windowSize > 500 ? 1 : 0}
        boundaryCount={windowSize > 500 ? 1 : 0}
        sx={{
          "& .MuiPaginationItem-root": {
            backgroundColor: "#2C30334D",
            color: "white",
            border: "none",
            borderRadius: "2px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" }, // Font size changes for different screen sizes
            lineHeight: { xs: "18px", sm: "20px", md: "22px", lg: "24px" },
            width: { xs: "40px", sm: "48px", md: "56px", lg: "64px" }, // Adjust width for responsiveness
            height: { xs: "40px", sm: "48px", md: "56px", lg: "64px" }, // Adjust height for responsiveness
            "&.Mui-selected": {
              backgroundColor: "#2C3033",
              color: "white",
            },
            "&:hover": {
              background: "rgba(44, 48, 51, 0.8)",
              color: "white",
            },
          },
        }}
      />
    </div>
  );
}
