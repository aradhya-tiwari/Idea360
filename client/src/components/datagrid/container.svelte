<script>
    let { children } = $props();
</script>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
        <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
            <tr>
                <th scope="col" class="px-6 py-3"> ID</th>
                <th scope="col" class="px-6 py-3"> Idea Title </th>
                <th scope="col" class="px-6 py-3"> Idea Status</th>
                <th scope="col" class="px-6 py-3"> Created on </th>
                <th scope="col" class="px-6 py-3"> Team </th>
                <th scope="col" class="px-6 py-3"> Role </th>
                <th scope="col" class="px-6 py-3"> Lab </th>
            </tr>
        </thead>
        <tbody>
            {#if children}
                {@render children()}
            {/if}
        </tbody>
    </table>
</div>
