import { useState } from "react";

export const useModal = (initialValue = false) => {
  const body = document.querySelector("body");
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = () => {
    // Disable scroll
    body.style.overflow = "hidden";
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Enable scroll
    body.style.overflow = "auto";
  };

  return [isOpen, openModal, closeModal];
};
