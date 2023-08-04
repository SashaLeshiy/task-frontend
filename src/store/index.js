import {createStore} from 'vuex'

export default createStore({
    state: {
        rightTop: null,
        leftTop: null,
    },

    getters: {
        getRightTop(state) {
            return state.rightTop
        },
        getLeftTop(state) {
            return state.leftTop
        },
    },

    mutations: {
        setRightTop(state, payload) {
            state.rightTop = payload;
        },
        setLeftTop(state, payload) {
            state.leftTop = payload;
        },
    },

    actions: {

    }
})