<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="testing">
	<h1>About Page</h1>
	<p>The answer is {data.answer}</p>
</div>

<style>
	.testing {
		background-color: aquamarine;
	}
	p {
		font-family: 'Times New Roman', Times, serif;
	}
</style>
