<template>
  <h1>To do List</h1>
  <todo-list location="home"></todo-list>
</template>

<script>
import TodoList from "../components/TodoList.vue";
export default {
  name: "HomePage",
  components: {TodoList},
}
</script>

<style scoped>

</style>