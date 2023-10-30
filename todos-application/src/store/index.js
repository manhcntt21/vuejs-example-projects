import {createStore} from "vuex";
import rootGetters from './getters'
import rootMutations from './mutations'
import rootActions from './actions'

const store = createStore({
    state() {
        return {
            todos: [{ id: 'first-element', name: 'My First To Do Item', completed: false, location: 'home' }]
        }
    },
    rootGetters,
    rootMutations,
    rootActions,
})

store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state))
})
export default store;