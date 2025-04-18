interface ButtonProps {
  label: string;
}

export const Button = ({ label }: ButtonProps) => {
  return (
    <button type="button" className="bg-dark color-custom-white rounded-full px-[24px] py-[12px]">
      {label}
    </button>
  );
};
