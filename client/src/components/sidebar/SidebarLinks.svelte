<script lang="ts">
    // import { importImg } from "$lib/importImg.svelte";
    import Img from "../../assets/sample1.svg";
    const { link = "#", title = "Title", icon } = $props();

    // let imgg = import.meta.glob(`../../assets/*.*`, {
    //     eager: true,
    //     query: {
    //         enhanced: true,
    //     },
    // });
    // let img = imgg["../../assets/" + icon] as string;
    // console.log(img);
</script>

<!-- <svelte:head>
    <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=${icon}`}
    />
</svelte:head> -->
<li>
    <a
        href={link}
        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
        <!-- use enhanced:image whenever error resolves officially otherwise use svelte component(need extra effort) -->
        <!-- <enhanced:img src={icon} alt="some alt text" class="h-7 w-7" /> -->
        <!-- <svelte:component this={icon} color="#777" /> -->
        <span class="material-icons text-gray-500">{icon}</span>
        <span class="ms-3 font-normal">{title}</span>
    </a>
</li>
