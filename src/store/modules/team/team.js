import { __getLeagueTeams } from '../../../services/api';

const teams = localStorage.getItem(btoa("TEAMS"));

const state = {
    teams: teams ? JSON.parse(teams) : []
}

const getters = {
    TEAMS: state => state.teams
}

const mutations = {
    SET_TEAMS(state, payload) {
        localStorage.setItem(btoa('TEAMS'), JSON.stringify(payload));
        state.teams = payload
    }
}

const actions = {
    FETCH_TEAMS(context, data) {
        return new Promise((resolve, reject) => {
            __getLeagueTeams(data.id).then(response => {
                response.teams.forEach((team, index) => team.id = index + 1)
                context.commit('SET_TEAMS', response.teams)
                return resolve(true)
            }).catch(() => {
                return reject(false)
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