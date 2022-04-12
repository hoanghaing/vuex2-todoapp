import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import TodoService from "../services/TodoService";
import router from '../router';
export default new Vuex.Store({
  state: {
      newTask: {},
      currentTask: {},
      deleteTask: {},
      tasks: [],
      totalTasks: 0
  },
  getters: {
      getTasks: (state) => state.tasks,
      getTotalTask: (state) => state.tasks.length,
      getTask: (state) => state.tasks,
  },
  mutations: {
      SET_TASKS(state, tasks) {
          state.tasks = tasks
          state.totalTasks = tasks.length;
      },
      SET_TASK(state, currentTask) {
        state.currentTask = currentTask;
      },
      DELETE_TASK(state, deleteTask){
          state.deleteTask = deleteTask;
      }
  },
  actions: {
    async fetchAllTasks({ commit }) {
        try {
            TodoService.getAll().then(response => {
                commit('SET_TASKS', response.data);
            })            
        }
        catch (error) {
            console.log(error);
        }
    },
    async fetchTask({commit}, data){
        let {id} = data;
        TodoService.get(id).then(
            response => {
                commit('SET_TASK', response.data)
            }
        )
    },
    async createTask({commit}, data) {
        console.log(data);
        TodoService.create(data).then(
            (response) => {
                commit('SET_TASK', response.data)
                router.push({ name: 'Todos' });
            }
        )
    },
    async updateTask({commit}, data) {
        let {id} = data;
        TodoService.update(id, data).then(
            response => {
                commit('SET_TASK', response.data);
                router.push({ name: 'Todos' });
            }
        );
    },
    async deleteTask({commit}, id){
        TodoService.delete(id).then(
            (response) => {
                commit('DELETE_TASK', response.data);
                router.go(router.currentRoute)
            }
        );
    }
  },
});