import cn from "classnames";
import "./button.css";
import { Icon, validIcons } from "./icon";

type ButtonProps = {
  style?: "fill" | "outline" | "ghost";
  size?: "small" | "base";
  disabled?: boolean;
  children: React.ReactNode;
  icon?: validIcons;
  iconIs?: "before" | "after";
};

export const Button = ({
  style = "fill",
  size = "base",
  disabled,
  children,
  iconIs = "after",
  icon: iconName = "AArrowDown",
}: ButtonProps) => {
  //

  const styleClass = `btn--${style}`;
  const sizeClass = `btn--${size}`;

  const IconMarkup = iconName ? (
    <Icon name={iconName} size={size === "base" ? 20 : 12} />
  ) : null;

  return (
    <button className={cn(["btn", styleClass, sizeClass])} disabled={disabled}>
      {iconIs === "before" && IconMarkup}
      {children}
      {iconIs === "after" && IconMarkup}
    </button>
  );
};
