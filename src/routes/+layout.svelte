<script>
	import Backgroundelements from '../components/backgroundelements.svelte';
	import Navigation from '../components/navigation.svelte';
	import '@fontsource-variable/unbounded';
	import '@fontsource-variable/inter';
	import '../app.css';
</script>

<Navigation />
<slot />
<Backgroundelements />
