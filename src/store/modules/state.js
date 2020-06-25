const dark_mode = localStorage.getItem(btoa("DARK_MODE"));

const state = {
    dark_mode: dark_mode ? JSON.parse(dark_mode) : { state: false }
}

const getters = {
    DARK_MODE: state => state.dark_mode
}

const mutations = {
    SET_DARK_MODE(state, payload) {
        localStorage.setItem(btoa('DARK_MODE'), JSON.stringify(payload));
        state.dark_mode = payload;
    }
}

const actions = {
    UPDATE_DARK_MODE(context, payload) {
        context.commit('SET_DARK_MODE', payload);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}