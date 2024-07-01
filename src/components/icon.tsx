import { icons, LucideProps } from "lucide-react";

export type validIcons = keyof typeof icons;

type IconProps = LucideProps & {
  name: validIcons;
};

export const Icon = ({ name, color, size }: IconProps) => {
  const LucideIcon = icons[name];
  return <LucideIcon color={color} size={size} />;
};
