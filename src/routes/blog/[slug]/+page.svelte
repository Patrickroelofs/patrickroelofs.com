<script lang="ts">
	import type { SingleBlogPost } from '$lib/types';

	export let data: SingleBlogPost;
</script>

<h2>{data.title}</h2>
<p>{data.description}</p>
