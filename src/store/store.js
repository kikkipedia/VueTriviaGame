import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//store used to share states between components and to manipulate them
export const store = new Vuex.Store({
    state: {
        url: '',
        points: 0,
        answers: []
    },
    mutations: {
        setUrl(state, url) {
            state.url = url
        },
        change(state, points) {
            state.points = points
        },
        addAnswers(state, answer) {
            state.answers.push(answer)
        }
    },
    getters: {
        url: state => state.url,
        points: state => state.points,
        answers: state => state.answers
    }
})