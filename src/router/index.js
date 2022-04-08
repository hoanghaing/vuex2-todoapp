import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '../views/TodoList.vue'
import TodoAdd from '../views/TodoAdd.vue'
import TodoEdit from '../views/TodoEdit.vue'
import TodoDetail from '../views/TodoDetail.vue'
Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Todos',
    component: TodoList
  },
  {
    path: '/todo/add',
    name: 'addTodo',
    component: TodoAdd
  },
  {
    path: '/todo/:id',
    component: TodoDetail
  },
  {
    path: '/todo/edit/:id',
    name: 'editTodo',
    component: TodoEdit
  },
]

const router = new Router({
  mode: 'history',
  routes
});

export default router
