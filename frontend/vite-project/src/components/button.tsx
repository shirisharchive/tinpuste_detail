interface IbuttonProps {
  title: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}
export const Button = ({ title, onClick, className, type = "button" }: IbuttonProps) => {
  return (
    <button type={type} title={title} onClick={onClick} className={className}>
      {title}
    </button>
  );
};