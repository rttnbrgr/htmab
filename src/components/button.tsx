import cn from "classnames";
import "./button.css";

type ButtonProps = {
  is?: boolean;
  style?: "fill" | "outline" | "ghost";
  size?: "small" | "base";
  disabled?: boolean;
  mock?: string;
  children: React.ReactNode;
};

export const Button = ({
  style = "fill",
  size = "base",
  mock,
  disabled,
  children,
}: ButtonProps) => {
  //

  const styleClass = `btn--${style}`;
  const sizeClass = `btn--${size}`;
  const mockClass = `mock--${mock}`;

  return (
    <button
      className={cn(["btn", styleClass, sizeClass, mockClass])}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
