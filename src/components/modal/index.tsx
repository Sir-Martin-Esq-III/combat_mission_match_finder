import React from "react";

interface Props {
  children?: React.ReactNode;
  onClose: () => any;
}

const Modal = ({ children, onClose }: Props) => {
  return (
    <div
      className="absolute w-full h-screen left-0 top-0 bg-gray-500 bg-opacity-60 backdrop-blur-md grid place-items-center z-40"
      onClick={() => {
        onClose();
      }}
    >
      <div
        id="Modal_Content"
        className="w-3/4 h-3/4 md:w-1/2 md:h-1/2 bg-white rounded-lg z-50"
        onClick={(e) => e.stopPropagation()}
      >
        {children !== undefined && children}
      </div>
    </div>
  );
};

export default Modal;
