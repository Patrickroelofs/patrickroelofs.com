<script lang="ts">
	import { cva } from 'class-variance-authority';

	export const url: string = '#';

	const linkVariants = cva(
		[
			'flex font-serif font-medium text-xl border-2 border-black uppercase w-fit px-8 py-3 rounded-md'
		],
		{
			variants: {},
			defaultVariants: {}
		}
	);
</script>

<a href={url} class={linkVariants()}>
	<slot />
</a>
