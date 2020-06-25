import { __getLatestHighlights } from '../../../services/api';
const highlights = localStorage.getItem(btoa("HIGHLIGHTS"));
const state = {
    highlights: highlights ? JSON.parse(highlights) : []
}

const getters = {
    HIGHLIGHTS: state => state.highlights
}

const mutations = {
    SET_HIGHLIGHTS(state, payload) {
        localStorage.setItem(btoa('HIGHLIGHTS'), JSON.stringify(payload));
        state.highlights = payload
    }
}

const actions = {
    FETCH_HIGHLIGHTS(context) {
        return new Promise((resolve, reject) => {
            __getLatestHighlights().then(response => {
                response.data.forEach((data, index) => {
                    data.id = index + 1
                })
                context.commit('SET_HIGHLIGHTS', response.data)
                return resolve(true)
            }).catch(err => {
                return reject(err)
            })
        })

    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}