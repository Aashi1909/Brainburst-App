type Props = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: Props) => (
  <button
    className="bg-[#d97d27] select-none font-bold h-[45px] min-w-[120px] rounded-[10px] m-6 text-white hover:bg-slate-100 hover:text-black"
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
