import * as PhosphorIcons from "@phosphor-icons/react/dist/ssr";
import type { ComponentProps, ComponentType, ReactElement } from "react";

type IconName = keyof typeof PhosphorIcons;

interface IconType {
  size: number;
  name: IconName;
}

function isValidIcon(name: string): name is IconName {
  return name in PhosphorIcons;
}

function Icon(props: IconType): ReactElement | null {
  if (!isValidIcon(props.name)) return null;

  const IconComponent = PhosphorIcons[props.name] as ComponentType<
    Omit<ComponentProps<(typeof PhosphorIcons)[IconName]>, "weights">
  >;

  return <IconComponent weight="duotone" {...props} />;
}

export { Icon };
