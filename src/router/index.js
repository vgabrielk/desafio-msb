import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Users from '../pages/Users/Users.vue'
import User from '../pages/Users/User.vue'
import UserStore from '../pages/Users/UserStore.vue'
import Tasks from '../pages/Tasks/Tasks.vue'
import Task from '../pages/Tasks/Task.vue'
import TaskStore from '../pages/Tasks/TaskStore.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/users', component: Users },
    { path: '/users/store', component: UserStore },
    { path: '/users/:id', component: User },
    { path: '/tasks', component: Tasks },
    { path: '/tasks/store', component: TaskStore },
    { path: '/tasks/:id', component: Task },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;