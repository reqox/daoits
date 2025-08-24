import { useState } from 'react';

export const useOpen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return { isOpen, toggleOpen };
};
