<template>
  <div :class="`task ${task.done ? 'is-completed' : ''}`">
    <div>{{ task.content }}</div>
    <div>
      <button @click="toggleDone">{{ task.done ? "Undo" : "Done" }}</button>
      <button class="btn btn-danger" @click="removeTask">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  methods:{
    toggleDone(){
      this.$store.commit('toggle_task',this.task);
    },
    removeTask(){
      this.$store.commit('remove_task',this.task);
    }
  }
};
</script>

<style>
.is-completed{
  text-decoration: line-through;
}
</style>
