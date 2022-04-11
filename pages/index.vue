<template>
  <div>
    <main style="text-align:center">
      <h2 >
        Add Todo
      </h2>
      <div>
        <input type="text" v-model="newTask" placeholder="Add Todo" @keypress.enter="addTask" />
        <button @click="addTask">Add</button>
      </div>
      <div>
        <Task v-for="(task,i) in $store.state.tasks" :key="i" :task="task" />
      </div>
    </main>
  </div>

</template>

<script>
export default {
  auth:false,
  name: 'IndexPage',
  data(){
    return {
      newTask : ''
    }
  },
  methods :{
    addTask(){
      if (this.newTask){
        this.$store.commit('add_task',this.newTask);
        this.newTask= '';
      }
    }
  }
}
</script>
