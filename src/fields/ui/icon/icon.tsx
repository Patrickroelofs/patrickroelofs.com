"use client";

import { Icon } from "@/components/icon";
import type { Icons } from "@/payload-types";
import { FieldLabel, SelectField, useField } from "@payloadcms/ui";
import { icons } from "@phosphor-icons/core";
import type { Option } from "payload";
import { useCallback } from "react";
import styles from "./icon.module.css";

export interface IconInputProps {
	path: string;
}

function IconInput(props: IconInputProps) {
	const { path } = props;

	const { setValue, value } = useField<string>({ path });
	const options = icons.map((icon) => ({
		label: icon.pascal_name,
		value: icon.pascal_name,
	}));

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
