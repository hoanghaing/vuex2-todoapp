import Task from "../../../apis/Task"
export const getTasks = ({ commit }) => {
    Task.getAll().then(response => {
        commit('SET_TASK', response.data);
    })
}