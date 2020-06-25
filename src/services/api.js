import axios from 'axios';

async function __getLatestHighlights() {
    const response = await axios.get("https://www.scorebat.com/video-api/v1/");
    return response;
}

async function __getTeamDetails(name) {
    const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${name}`);
    return response.data;
}

async function __getLeagueTeams(leagueID) {
    const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${leagueID}`);
    return response.data;
}

async function __getMatches() {
    const response = await fetch('http://api.football-data.org/v2/competitions/PL/matches/?matchday=22', {
        headers: {
            'X-Auth-Token': '5e3d211e48664f47b64e4824e6814d84'
        }
    })
    return response.json();
}

export {
    __getLatestHighlights,
    __getTeamDetails,
    __getLeagueTeams,
    __getMatches
}