<script lang="ts">
    type rows = {
        id: number;
        title: string;
        creator: string;
        status: "approved" | "waiting" | "under review";
        createdAt: string;
        img: Array<string>;
    };
    const props: rows = $props();
</script>

<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <td class="px-6 py-4"> {props.id} </td>
    <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
        {props.title}
    </th>
    <td class="px-6 py-4 text-green-500"> {props.status} </td>
    <td class="px-6 py-4">{props.createdAt} </td>
    <td class="px-6 py-4"> {props.creator} </td>
    <td class="px-6 py-4 flex"
        >{#each props.img as img}
            <img src={img || ""} alt="" class="w-5 h-5 rounded-full -mx-3" />
        {/each}
    </td>
    <td class="px-6 py-4">
        <a
            href="#"
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >Edit</a
        >
    </td>
</tr>
