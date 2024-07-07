import styles from "./button.module.css";
import { Icon, validIcons } from "./icon";
import { cva, type VariantProps } from "class-variance-authority";

const buttonClasses = cva(styles.base, {
  variants: {
    style: {
      fill: styles.fill,
      outline: styles.outline,
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

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof button> {}

type ButtonProps = VariantProps<typeof buttonClasses> & {
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

  const IconMarkup = iconName ? (
    <Icon name={iconName} size={size === "base" ? 20 : 12} />
  ) : null;

  return (
    <button className={buttonClasses({ style, size })} disabled={disabled}>
      {iconIs === "before" && IconMarkup}
      {children}
      {iconIs === "after" && IconMarkup}
    </button>
  );
};

// export const Button: React.FC<ButtonProps> = ({
//   className,
//   intent,
//   size,
//   ...props
// }) => <button className={button({ intent, size, className })} {...props} />;
//
