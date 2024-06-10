import cn from "classnames";
import "./icon-button.css";
import { Camera } from "lucide-react";

type IconButtonProps = {
  size?: "small" | "base";
  disabled?: boolean;
};

export const IconButton = ({ size = "base", disabled }: IconButtonProps) => {
  //

  const sizeClass = `iconBtn--${size}`;
  const iconSize = size === "base" ? 20 : 12;

  return (
    <button
      className={cn(["iconBtn iconBtn--fill", sizeClass])}
      disabled={disabled}
    >
      <Camera size={iconSize} />
    </button>
  );
};
