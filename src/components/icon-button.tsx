import styles from "./icon-button.module.css";
import { Icon, validIcons } from "./icon";
import { cva, type VariantProps } from "class-variance-authority";

const iconButtonClasses = cva([styles.reset, styles.base, styles.fill], {
  variants: {
    size: {
      small: styles.small,
      base: styles.medium,
    },
  },
  defaultVariants: {
    size: "base",
  },
});

type IconButtonProps = VariantProps<typeof iconButtonClasses> & {
  disabled?: boolean;
  name: validIcons;
};

export const IconButton = ({
  size = "base",
  disabled,
  name,
}: IconButtonProps) => {
  //
  const iconSize = size === "base" ? 20 : 12;

  return (
    <button className={iconButtonClasses({ size })} disabled={disabled}>
      <Icon name={name} size={iconSize} />
    </button>
  );
};
