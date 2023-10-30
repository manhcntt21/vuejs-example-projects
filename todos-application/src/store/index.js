import {createStore} from "vuex";
import rootGetters from './getters.js'
import rootMutations from './mutations.js'
import rootActions from './actions.js'

const store = createStore({
    state() {
        return {
            todos: [{ id: 'first-element', name: 'My First To Do Item', completed: false, location: 'home' }]
        }
    },
    getters: rootGetters,
    mutations: rootMutations,
    actions: rootActions,
})
/**
 * run before every mutation method
 */
store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state))
})
export default store;