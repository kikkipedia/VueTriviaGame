//store used to share states between components and to manipulate them

import Vue from 'vue'
import Vuex from 'vuex'

//Application store that holds the state
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        url: '',
        points: 0
    },
    mutations: {
        setUrl(state, url) {
            state.url = url
        },
        change(state, points) {
            state.points = points
        }
    },
    getters: {
        url: state => state.url,
        points: state => state.points
    }
})