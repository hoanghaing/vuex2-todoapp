import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import TodoService from "../services/TodoService";
export default new Vuex.Store({
  state: {
      tasks: [],
      totalTasks: 0
  },
  getters: {
      getTasks: (state) => state.tasks,
      getTotalTask: (state) => state.tasks.length
  },
  mutations: {
      SET_TASKS(state, tasks) {
          state.tasks = tasks
          state.totalTasks = tasks.length;
      }
  },
  actions: {
    async fetchTasks({ commit }) {
        try {
            TodoService.getAll().then(response => {
                commit('SET_TASKS', response.data);
            })            
        }
        catch (error) {
            console.log(error);
        }
    }
  },
});


// import state from "./state";
// import * as getters from './getters';
// import * as mutations from './mutations';
// import * as actions from './actions';

// import task from './modules/task';

// export default new Vuex.Store({
//     state,
//     getters,
//     mutations,
//     actions,
//     modules: {
//         task,
//     }
// });