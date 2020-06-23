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
    FETCH_TEAMS(context) {
        __getLeagueTeams().then(response => {
            response.teams.forEach((team, index) => team.id = index + 1)
            context.commit('SET_TEAMS', response.teams)
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