"use client";

import { Icon } from "@/components/icon";
import { SelectField, useField, FieldLabel } from "@payloadcms/ui";
import { icons } from "@phosphor-icons/core";
import type { Option } from "payload";
import type { Icons } from "@/payload-types";
import styles from "./icon.module.css";
import { useMemo, useCallback } from "react";

export interface IconInputProps {
	path: string;
}

function IconInput(props: IconInputProps) {
	const { path } = props;

	const { setValue, value } = useField<string>({ path });
	const options = useMemo(
		() =>
			icons.map((icon) => ({
				label: icon.pascal_name,
				value: icon.pascal_name,
			})),
		[],
	);

	const onChange = useCallback(
		(option: Option | Option[]) => {
			setValue(option);
		},
		[setValue],
	);

	return (
		<div>
			<FieldLabel path={path} label="Icon" required />
			<div className={styles.fieldWrapper}>
				{value && <Icon name={value as Icons} size={32} />}
				<SelectField
					path={path}
					field={{
						name: path,
						hasMany: false,
						options,
					}}
					value={value}
					onChange={onChange}
				/>
			</div>
		</div>
	);
}

export { IconInput };
