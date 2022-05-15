interface ButtonProps {
  text: string;
  type?: 'primary' | 'default' | 'primary_revert';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const BUTTON_TYPE = {
  default: 'text-blackish bg-white',
  primary: 'text-white bg-primary',
  primary_revert: 'text-primary bg-white',
}

export default function Button({ text, onClick, type = 'default', className }: ButtonProps){
  return (
    <button type="button" className={`text-sm md:text-base rounded py-2 px-6 tracking-wider ${BUTTON_TYPE[type]} ${className || ''}`} onClick={onClick}>
      {text}
    </button>
  )
}
