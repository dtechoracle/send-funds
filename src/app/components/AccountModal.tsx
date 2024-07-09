import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSent: () => void;
}

const AccountModal: React.FC<ModalProps> = ({ isOpen, onClose, onSent }) => {
  if (!isOpen) return null;

  const handleSentClick = () => {
    onSent();
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div className="bg-white text-black text-center rounded-lg p-6 z-10 h-[460px] w-[400px]">
          <div className="flex justify-end">
            <button onClick={onClose} className="text-xl">
              X
            </button>
          </div>
          {/* <div className="flex justify-center mb-4">
            <img src="/images/payoutIcon.svg" className="w-auto h-auto" />
          </div> */}
          <h2 className="text-xl font-semibold text-[#141517]">
            Account Information
          </h2>
          <p>Send the money here, make i see food chop</p>
          <div className="mt-12 space-y-2 text-left">
            <p className="flex justify-between">
              <span>Name:</span> <span>Ezekiel Jeremiah</span>
            </p>
            <p className="flex justify-between">
              <span>Account Number:</span> <span>8127982163</span>
            </p>
            <p className="flex justify-between">
              <span>Bank Name:</span> <span>Opay</span>
            </p>
          </div>
          <button
            className="active:scale-[0.9] mt-8 transition-all duration-300 cursor-pointer rounded-[100px] h-[50px] grid place-items-center w-full md:w-[360px] border-[1px] border-[#E2E2E2] text-[15px]"
            onClick={handleSentClick}
          >
            Sent?
          </button>
        </div>
      </div>
    </>
  );
};

export default AccountModal;
