import VueRouter from "vue-router"
import Start from './components/Start.vue'
import Questions from './components/Questions.vue'

const routes = [
    {
    path: '/',
    name: 'Start',
    component: Start
}, {
    path:'/questions',
    name: 'Questions',
    component: Questions
}
]

export const router = new VueRouter({ routes })

