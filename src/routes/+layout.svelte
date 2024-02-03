<script>
	import Backgroundelements from '$lib/components/backgroundelements.svelte';
	import '@fontsource-variable/unbounded';
	import '@fontsource-variable/inter';
	import '../app.css';
	import Navigation from '$lib/components/navigation.svelte';
</script>

<Navigation />
<slot />
<Backgroundelements />
