<script>
	import '@fontsource-variable/unbounded';
	import '@fontsource-variable/inter';

	import Backgroundelements from '../lib/components/backgroundelements.svelte';
	import Navigation from '../lib/components/navigation.svelte';
	import Head from '$lib/components/head.svelte';
	import '../app.css';
</script>

<Head title="Patrick Roelofs" url="https://patrickroelofs.com" />
<Navigation />
<slot />
<Backgroundelements />
