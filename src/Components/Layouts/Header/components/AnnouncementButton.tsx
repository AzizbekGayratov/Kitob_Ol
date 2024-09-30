import { useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import { Divider, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

export default function AnnouncementButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Accordion
        expanded={isOpen}
        onChange={handleToggle}
        sx={{
          backgroundColor: isOpen ? "#ABBCC81A" : "#2C3033",
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
