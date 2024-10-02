import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import { Divider, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useDispatch, useSelector } from "react-redux";
import { DropDownType } from "modules/Announcements/types/Types";
import { toggleDropDown } from "Store/dropDownSlice/dropDownSlice";

export default function AnnouncementButton() {
  const dispatch = useDispatch();
  const { selected } = useSelector(
    (state: { dropDown: { selected: DropDownType | "" } }) => state.dropDown
  );

  const handleDropdownClick = () => {
    dispatch(toggleDropDown("announcement"));
  };

  return (
    <>
      <Accordion
        expanded={selected === "announcement"}
        onChange={handleDropdownClick}
        sx={{
          backgroundColor:
            selected === "announcement" ? "#ABBCC81A" : "#2C3033",
          boxShadow: "none",
          border: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="text-white flex items-center gap-3">
            <button className="text-white text-base py-2 px-4">
              E'lon berish
            </button>
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Link to="/announcements/book" className="text-white block py-3 px-6">
            Kitob
          </Link>

          <Divider sx={{ backgroundColor: "white", opacity: 0.4 }} />

          <Link
            to="/announcements/vacancy"
            className="text-white block py-3 px-6"
          >
            Ish
          </Link>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
