<script setup>
import AddTask from './components/AddTask.vue';
import Tasks from './components/Tasks.vue';
</script>
<template>
<main>
<div class="container">
<AddTask/>
<Tasks/>
</div>
</main>
</template>
<style>
.container{
  padding:32px;
  background-color:lightgreen;
  border-radius:8px;
}
</style>
