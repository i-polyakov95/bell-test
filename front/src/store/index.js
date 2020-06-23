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
            let item = state.listOfUnselected.find(x => x.id === id);
            state.listOfSelected.push(item);
            state.listOfUnselected.splice(state.listOfUnselected.indexOf(item), 1);
            state.history.push({
                item,
                type: 'select',
                date: new Date,
            })
        },
        unselectItem(state, id) {
            let item = state.listOfSelected.find(x => x.id === id);
            state.listOfUnselected.push(item)
            state.listOfSelected.splice(state.listOfSelected.indexOf(item), 1)
            state.history.push({
                item,
                type: 'unselect',
                date: new Date,
            })
        },
    },
    actions: {
    },
    modules: {
    }
})
