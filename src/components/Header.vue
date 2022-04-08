<template>
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link class="text-white font-bold uppercase text-2xl mr-4" :to="{name: 'Todos'}">
        Todos
      </router-link>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <router-link class="px-2 text-white" :to="{name: 'addTodo'}">
              Add
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
    export default {
        name: 'AppHeader'
    }
</script>