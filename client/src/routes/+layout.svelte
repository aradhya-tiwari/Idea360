<script lang="ts">
	import "../app.css";
	import Sidebar from "$comp/sidebar/Sidebar.svelte";
	import SidebarButton from "$comp/sidebar/SidebarButton.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<script
		src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"
	></script>
</svelte:head>

<!-- <div
	id="containe"
	class="grid border border-red-500"
	style="grid-template-columns: 1fr 1fr 1fr 2fr 1fr;"
> -->

<div
	class="grid bg-stone-10 overflow-hidden border"
	style="grid-template-columns: 1fr 5fr; grid-template-rows:7vh 93vh"
>
	<!-- <aside
		id="default-sidebar"
		class=" col-span-1 row-start-1 row-end-3 overflow-hidden sm:relative w-[80%] sm:w-auto fixed top-0 left-0 z-40 h-screen transition-transform -tanslate-x-full sm:translate-x-0"
		aria-label="Sidebar"
	> -->
	<SidebarButton />
	<aside
		id="sidebar-multi-level-sidebar"
		class="fixed sm:static top-0 left-0 z-40 col-span-1 row-start-1 row-end-3 h-screen transition-transform -translate-x-full sm:translate-x-0"
		aria-label="Sidebar"
	>
		<Sidebar />
	</aside>
	<div class="border row-start-1 col-start-2"></div>
	<div class="col-start-2 row-start-2 border overflow-auto">
		{@render children()}
	</div>

	<!-- <Sidebar /> -->
</div>

<style>
	.container {
		grid-template-columns: 1fr 5fr;
	}
</style>
