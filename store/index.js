export const state = () =>({
    tasks : []
})

export const mutations = {
  add_task(state,task){
    state.tasks = [{content : task, done :false} , ...state.tasks];
  },
  remove_task(state,task){
    state.tasks.splice(state.tasks.indexOf(task),1);
  },
  toggle_task(state,task){
    task.done = !task.done;
  }
}
