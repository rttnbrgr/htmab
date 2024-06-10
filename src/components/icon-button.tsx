import cn from "classnames";
import "./icon-button.css";
import { Icon, validIcons } from "./icon";

type IconButtonProps = {
  size?: "small" | "base";
  disabled?: boolean;
  name: validIcons;
};

export const IconButton = ({
  size = "base",
  disabled,
  name,
}: IconButtonProps) => {
  //
  const sizeClass = `iconBtn--${size}`;
  const iconSize = size === "base" ? 20 : 12;

  return (
    <button
      className={cn(["iconBtn iconBtn--fill", sizeClass])}
      disabled={disabled}
    >
      <Icon name={name} size={iconSize} />
    </button>
  );
};
