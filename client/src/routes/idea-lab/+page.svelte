<script>
    import DataGridContainer from "$comp/datagrid/container.svelte";
    import DataItems from "$comp/datagrid/dataItem.svelte";

    let dataRows = [
        {
            id: 1,
            title: "Idea 1",
            creator: "John Doe",
            status: "approved",
            createdAt: "2024-07-05T10:30:00Z",
            img: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfd3PPulVSp4ZbuBFNkePoUR_fLJQe474Ag&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfd3PPulVSp4ZbuBFNkePoUR_fLJQe474Ag&s",
            ],
        },
        {
            id: 2,
            title: "Idea 2",
            creator: "Jane Smith",
            status: "waiting",
            createdAt: "2024-07-04T15:15:00Z",
            img: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfd3PPulVSp4ZbuBFNkePoUR_fLJQe474Ag&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfd3PPulVSp4ZbuBFNkePoUR_fLJQe474Ag&s",
            ],
        },
        {
            id: 3,
            title: "Idea 3",
            creator: "David Lee",
            status: "under review",
            createdAt: "2024-07-05T09:00:00Z",
            img: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfd3PPulVSp4ZbuBFNkePoUR_fLJQe474Ag&s",
            ],
        },
    ];
</script>

<DataGridContainer>
    {#each dataRows as rows}
        <DataItems {...rows} />
    {/each}
</DataGridContainer>
<!-- <div class="w-full h-20 border"></div>
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
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4"> 1 </td>
                <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    Streamlining Patient Referral
                </th>
                <td class="px-6 py-4"> Adison kenter </td>
                <td class="px-6 py-4 text-green-500"> Approved </td>
                <td class="px-6 py-4">!2 Dec 2024 </td>
                <td class="px-6 py-4 flex"
                    ><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfd3PPulVSp4ZbuBFNkePoUR_fLJQe474Ag&s"
                        alt=""
                        class="w-5 h-5 rounded-full"
                    />
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfd3PPulVSp4ZbuBFNkePoUR_fLJQe474Ag&s"
                        alt=""
                        class="w-5 h-5 rounded-full -mx-3"
                    />
                </td>
                <td class="px-6 py-4">
                    <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >Edit</a
                    >
                </td>
            </tr>
        </tbody>
    </table>
</div> -->
