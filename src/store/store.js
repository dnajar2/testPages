import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vue.store({
    state: {
        users: []
    },
    getters: {
        getUsers: state => state.users
    },
    mutations: {
        setUsers(state, payload){
            state.users = payload
        }
    },
    actions: {
        async syncUsers({commit}){
            let res = await Vue.prototype.$http.get('https://jsonplaceholder.typicode.com/users');
            let payload = res.data
            commit('setUsers', payload)
        }
    },
    modules: {}
})
