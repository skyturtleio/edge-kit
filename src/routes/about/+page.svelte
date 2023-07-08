<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>About Page</h1>
<h2>{data.other_message}</h2>
<h3>{data.answer}</h3>
