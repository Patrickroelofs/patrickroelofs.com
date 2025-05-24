import type { Icons } from "@/payload-types";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { Icon } from "./Icon";
import { cva, cx } from "class-variance-authority";

type CommonProps = {
	icon?: Icons;
	iconSize?: number;
	children?: React.ReactNode;
};

type ButtonOnlyProps = CommonProps &
	ButtonHTMLAttributes<HTMLButtonElement> & {
		as: "button";
	};

type LinkOnlyProps = CommonProps &
	AnchorHTMLAttributes<HTMLAnchorElement> & {
		as: "link";
	};

type Props = ButtonOnlyProps | LinkOnlyProps;

const linkTextStyles = cva(
	"inline-block font-medium text-xl decoration-2 underline-offset-4 transition-all ease-[cubic-bezier(0.215,0.61,0.355,1)]",
	{
		variants: {
			icon: {
				false: null,
				true: "group-hover:-translate-x-0.5 group-focus-visible:-translate-x-0.5 group-hover:underline group-focus-visible:underline",
			},
		},
	},
);

const linkIconStyles = cva(
	"inline-block transition-all duration-300 ease-[cubic-bezier(0.215,0.61,0.355,1)] ",
	{
		variants: {
			hasChildren: {
				true: "-translate-y-2 invisible translate-x-4 rotate-[60deg] scale-50 opacity-0 group-hover:visible group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:visible group-focus-visible:translate-x-0 group-focus-visible:translate-y-0 group-focus-visible:rotate-0 group-focus-visible:scale-100 group-focus-visible:opacity-100",
				false: null,
			},
		},
	},
);

function Button(props: Props) {
	if (props.as === "link") {
		const { href, className, icon, as, iconSize, children, ...rest } = props;

		return (
			<Link
				href={href || ""}
				className={cx(
					"group inline-flex items-center justify-center gap-2",
					className,
				)}
				{...rest}
			>
				{icon && (
					<Icon
						size={iconSize || 32}
						name={icon}
						className={linkIconStyles({
							hasChildren: !!children,
						})}
					/>
				)}

				{children && (
					<span
						className={linkTextStyles({
							icon: !!icon,
						})}
					>
						{children}
					</span>
				)}

				{props.target === "_blank" && (
					<span className="sr-only">opens in a new tab</span>
				)}
			</Link>
		);
	}

	const { className, icon, as, iconSize, children, ...rest } = props;

	return (
		<button
			className={cx(
				"flex items-center gap-2 rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700",
				className,
			)}
			{...rest}
		>
			{icon && <Icon size={iconSize || 32} name={icon} />}
			{children}
		</button>
	);
}

export { Button };
