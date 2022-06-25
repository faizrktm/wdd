import type { ReactNode } from "react";

interface ButtonProps {
  text: ReactNode;
  type?: 'primary' | 'default' | 'primary_revert';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const BUTTON_TYPE = {
  default: 'text-blackish bg-white',
  primary: 'text-white bg-primary',
  primary_revert: 'text-primary bg-white',
}



export default function Button({ text, onClick, type = 'default', className }: ButtonProps) {
  return (
    <button type="button" className={`relative drop-shadow-md rounded-full flex items-center justify-center ${BUTTON_TYPE[type]} ${className || ''}`} onClick={onClick}>
      {text}
    </button>
  )
}
