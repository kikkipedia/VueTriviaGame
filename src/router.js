import VueRouter from "vue-router"
import Start from './components/Start.vue'
import Questions from './components/Questions.vue'
import Results from './components/Results.vue'
const routes = [
    {
    path: '/',
    name: 'Start',
    component: Start
},{
    path:'/questions',
    name: 'Questions',
    component: Questions
},{
    path:'/results',
    name: 'Results',
    component: Results
}
]

export const router = new VueRouter({ 
    mode: 'history',
    routes })

