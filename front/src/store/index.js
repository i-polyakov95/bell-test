import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        listOfUnselected: [],
        listOfSelected: [],
        history: []
    },
    mutations: {
        fillUnselectedList(state, items) {
            state.listOfUnselected = [...items];
        },
        selectItem(state, id) {
            let logEntry = {
                id,
                type: 'select',
                date: new Date,
            }
            let item = state.listOfUnselected.find(x => x.id === id);
            state.listOfSelected.push(item);
            state.listOfUnselected.splice(state.listOfUnselected.indexOf(item), 1);
            state.history.push(logEntry)
        },
        unselectItem(state, id) {
            let logEntry = {
                id,
                type: 'unselect',
                date: new Date,
            }
            let item = state.listOfSelected.find(x => x.id === id);
            state.listOfUnselected.push(item)
            state.listOfSelected.splice(state.listOfSelected.indexOf(item), 1)
            state.history.push(logEntry)
        },
    },
    actions: {
    },
    modules: {
    }
})
