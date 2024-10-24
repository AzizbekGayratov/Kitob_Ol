import React from "react";

interface ModalType {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export default function AnnouncementPreviewModal({
  modalOpen,
  setModalOpen,
  children,
}: ModalType) {
  return (
    <>
      {modalOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
            <div className="bg-white size-4/6 border-4 border-rootBg rounded-md text-center p-6 z-50 relative">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-gray-800 text-2xl"
              >
                X
              </button>

              <div className="pt-7 text-left">{children}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
