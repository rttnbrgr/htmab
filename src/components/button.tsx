import cn from "classnames";
import "./button.css";

type ButtonProps = {
  style?: "fill" | "outline" | "ghost";
  size?: "small" | "base";
  disabled?: boolean;
  children: React.ReactNode;
};

export const Button = ({
  style = "fill",
  size = "base",
  disabled,
  children,
}: ButtonProps) => {
  //

  const styleClass = `btn--${style}`;
  const sizeClass = `btn--${size}`;

  return (
    <button className={cn(["btn", styleClass, sizeClass])} disabled={disabled}>
      {children}
    </button>
  );
};
