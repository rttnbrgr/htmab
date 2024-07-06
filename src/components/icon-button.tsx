import styles from "./icon-button.module.css";
import { Icon, validIcons } from "./icon";
import { cva, type VariantProps } from "class-variance-authority";

const iconButtonClasses = cva([styles.reset, styles.base], {
  variants: {
    style: {
      fill: styles.fill,
      ghost: styles.ghost,
    },
    size: {
      small: styles.small,
      base: styles.medium,
    },
  },
  defaultVariants: {
    style: "fill",
    size: "base",
  },
});

type IconButtonProps = VariantProps<typeof iconButtonClasses> & {
  disabled?: boolean;
  name: validIcons;
};

export const IconButton = ({
  style = "fill",
  size = "base",
  disabled,
  name,
}: IconButtonProps) => {
  //
  const iconSize = size === "base" ? 20 : 12;

  return (
    <button className={iconButtonClasses({ style, size })} disabled={disabled}>
      <Icon name={name} size={iconSize} />
    </button>
  );
};
