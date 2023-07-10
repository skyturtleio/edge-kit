<script>
	import Nested from './Nested.svelte';
	let count = 0;

	$: console.log(`the count is ${count}`);

	function increment() {
		count += 1;
	}
</script>

<button on:click={increment}>
	Clicked {count} times.
</button>

<Nested answer={48} />
