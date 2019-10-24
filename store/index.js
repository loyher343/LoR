import Vuex from 'vuex'
const createStore = () => {
    return new Vuex.Store({
        state: {
            cards: []
        },
        mutations: {
            add (state, payload) {
                state.cards = payload;
            }
        }
    })
}

export default createStore