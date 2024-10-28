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
        <div className="fixed inset-0 bg-black bg-opacity-60 z-40 flex items-center justify-center">
          <div className="bg-white h-[85%] w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] border-2 border-gray-300 rounded-lg shadow-lg p-6 z-50 relative overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-xl font-bold focus:outline-none"
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Modal content */}
            <div className="mt-6 md:mt-10 text-left space-y-4 sm:space-y-6">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
