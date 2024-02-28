<script>
	import Backgroundelements from '$lib/components/backgroundelements.svelte';
	import Navigation from '$lib/components/navigation.svelte';
	import '@fontsource-variable/unbounded';
	import '@fontsource-variable/inter';
	import '../app.css';
</script>

<Navigation />
<slot />
<Backgroundelements />
