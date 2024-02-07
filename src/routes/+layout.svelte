<script>
	import Backgroundelements from '$lib/components/backgroundelements.component.svelte';
	import Navigation from '$lib/components/navigation.component.svelte';
	import '@fontsource-variable/unbounded';
	import '@fontsource-variable/inter';
	import '../app.css';
</script>

<Navigation />
<slot />
<Backgroundelements />
