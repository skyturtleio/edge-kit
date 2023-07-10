<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>About Page</h1>
<p>{data.answer}</p>
