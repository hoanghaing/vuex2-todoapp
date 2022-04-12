<template>
  <div class="content-center">
    <div class="list row">
        <h1 class="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">Total: {{ totalTasks }}</h1>
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                    <thead class="border-b">
                        <tr>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            #
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Title
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Description
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Status
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Action
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b" v-for="(task, index) in tasks" :key="index">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {{ task.id }}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {{ task.title }}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {{ task.description }}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <span v-if="task.status === 'completed'"  class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded">
                                {{ task.status }}
                            </span>
                            <span v-else class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded">
                                {{ task.status }}
                            </span>
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex space-x-2">
                                <router-link :to="{ path: '/todo/edit/'+ task.id}" class="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4">
                                    <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                        Edit
                                    </button>
                                </router-link>
                                    <button type="button" @click="deleteTask(task.id)" class="
                                    transition duration-300 ease-in-out mb-4 inline-block px-6 py-2.5 bg-red-600
                                    text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 
                                    hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800
                                    active:shadow-lg transition duration-150 ease-in-out">
                                        Delete
                                    </button>
                            </td>

                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        computed: mapState(['tasks', 'totalTasks']),
        created() {
            this.$store.dispatch('fetchAllTasks');
        },
        methods: {
            deleteTask(id) {
                this.$store.dispatch('deleteTask', id);
            }
        },
        data: () => ({

        })
    }
</script>
