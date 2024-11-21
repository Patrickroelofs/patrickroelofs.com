import React, { type ReactElement } from 'react';
import * as icons from '@phosphor-icons/react/dist/ssr';
import { type IconProps } from '@phosphor-icons/react';

interface CustomIconProps extends IconProps {
  iconType: string | null | undefined;
}

export function Icon({ iconType, ...props }: CustomIconProps): ReactElement {
  const IconComponent = iconType
    ? (icons as Record<string, React.ElementType>)[iconType]
    : false;

  if (!IconComponent) {
    return <span>Icon not found</span>;
  }

  return <IconComponent {...props} />;
}
