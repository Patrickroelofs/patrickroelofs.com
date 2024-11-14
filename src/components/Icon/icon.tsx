import React, { type ReactElement } from 'react';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr';
import { type IconProps } from '@phosphor-icons/react';

interface CustomIconProps {
  type: string | null | undefined;
  props?: IconProps;
}

export function Icon({ type, ...props }: CustomIconProps): ReactElement {
  switch (type) {
    case 'LinkedinLogo':
      return <LinkedinLogo {...props.props} />;
    case 'GithubLogo':
      return <GithubLogo {...props.props} />;
    default:
      // TODO: Handle this case better
      return <p>No Icon was found... Thats an oopsie!</p>;
  }
}
