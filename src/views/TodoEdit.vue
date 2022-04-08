<template>
    <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
            <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-450">Edit Todo</h1>
            <label for="titleInput" class="form-label inline-block mb-2 text-gray-700">Title</label>
            <input type="text" id="titleInput" class="
                form-control block w-full px-3 py-1.5 text-base
                font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition
                ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title"/>
            <label for="descriptionInput" class="form-label inline-block mb-2 text-gray-700">Description</label>
            <input type="text" id="descriptionInput" class="form-control block w-full px-3 py-1.5 text-base
                font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition
                ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title"/>
            <label for="status" class="form-label inline-block mb-2 text-gray-700">Status</label>
            <select class="form-select appearance-none block w-full px-3 py-1.5
                text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="complete">Complete</option>
                <option value="doing">Doing</option>
            </select>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EditTodo'
    }
</script>