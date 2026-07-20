interface ITinprop {
  value: string;
  type: string;
  id: string;
  className?: string;
  title: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TinpusteCompo = ({ value, type, id, className, title, onChange }: ITinprop) => {
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input
        value={value}
        type={type}
        id={id}
        className={className}
        onChange={onChange}
      />
    </div>
  );
};