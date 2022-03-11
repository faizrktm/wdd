interface ButtonProps {
  text: string;
  type?: 'primary' | 'default';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const BUTTON_TYPE = {
  default: 'text-blackish bg-white',
  primary: 'text-white bg-wheat'
}

export default function Button({ text, onClick, type = 'default' }: ButtonProps){
  return (
    <button type="button" className={`text-sm md:text-base rounded py-2 px-6 tracking-wider ${BUTTON_TYPE[type]}`} onClick={onClick}>
      {text}
    </button>
  )
}