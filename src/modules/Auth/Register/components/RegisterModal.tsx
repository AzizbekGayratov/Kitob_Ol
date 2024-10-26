import { Box, Modal } from "@mui/material";

interface RegisterModalProps {
  open: boolean;
  onClose: any;
  status: number | null;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "4px",
  border: "none",
  p: 4,
};

export default function RegisterModal({
  open,
  onClose,
  status,
}: RegisterModalProps) {
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <div className="flex flex-col gap-10 items-center">
            <h1 className="text-[28px] text-black font-semibold">{status}</h1>
            <button
              onClick={onClose}
              className="bg-primary rounded text-base leading-[19px] text-white py-4 px-10 sm:px-5"
            >
              Ok
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
