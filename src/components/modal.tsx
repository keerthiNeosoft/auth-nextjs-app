"use client";

import { useEffect } from "react";
import "../app/globals.css";
import ReactPortal from "./reactPortal";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

export const Modal = ({ children, isOpen, handleClose }: ModalProps) => {
  //close modal on escape key press
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);

    return (): void => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  //disable scroll on modal load
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return (): void => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <div className="fixed top-0 left-0 w-screen h-screen z-40 bg-[rgba(0,0,0,0.5)]">
          <div className="fixed rounded flex flex-col align-middle box-border overflow-hidden p-5  inset-x-60 inset-y-20 z-50 opacity-100">
            <button
              className="py-2 px-8 self-end font-bold hover:bg-violet-600 border rounded text-white"
              onClick={handleClose}
            >
              Close
            </button>
            <div className="box-border text-center bg-white p-20">
              {" "}
              {children}
            </div>
          </div>
        </div>
      </>
    </ReactPortal>
  );
};
