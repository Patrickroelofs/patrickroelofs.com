import React, { type ReactElement } from 'react';
import {
  GithubLogo,
  LinkedinLogo,
  ArrowSquareOut,
} from '@phosphor-icons/react/dist/ssr';
import { type IconProps } from '@phosphor-icons/react';

interface CustomIconProps extends IconProps {
  iconType: string | null | undefined;
}

export function Icon({ iconType, ...props }: CustomIconProps): ReactElement {
  switch (iconType) {
    case 'LinkedinLogo':
      return <LinkedinLogo {...props} />;
    case 'GithubLogo':
      return <GithubLogo {...props} />;
    case 'ArrowSquareOut':
      return <ArrowSquareOut {...props} />;
    default:
      // TODO: Handle this case better
      return <p>No Icon was found... Thats an oopsie!</p>;
  }
}
