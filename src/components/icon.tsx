import type { Icons } from "@/payload-types";
import * as PhosphorIcons from "@phosphor-icons/react/dist/ssr";
import type { ReactElement } from "react";

interface IconType {
	size: number;
	name: Icons;
}

function Icon(props: IconType): ReactElement | null {
	const IconComponent = PhosphorIcons[props.name];

	return <IconComponent {...props} weight="duotone" />;
}

export { Icon };
