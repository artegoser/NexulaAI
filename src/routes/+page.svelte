<script>
	import { page } from '$app/stores';
	import { redirect } from '@sveltejs/kit';
	if ($page.url.pathname === '/') {
		throw redirect(308, '/playground');
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Nothing here...</h1>
	</div>
</div>
