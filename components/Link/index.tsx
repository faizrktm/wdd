import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  location: string;
  text: string;
  type?: 'primary' | 'default' | 'primary_revert';
  className?: string;
  icon?: ReactNode,
}

const BUTTON_TYPE = {
  default: 'text-blackish bg-white',
  primary: 'text-white bg-primary',
  primary_revert: 'text-primary bg-white',
}

export default function Link({ location, text, type = 'default', className, icon, ...rest }: ButtonProps){
  return (
    <a href={location} className={`inline-flex items-center justify-center text-sm md:text-base rounded py-2 px-6 tracking-wider ${BUTTON_TYPE[type]} ${className || ''}`} {...rest}>
      {icon}{text}
    </a>
  )
}
