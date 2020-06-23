import axios from 'axios';

async function __getLatestHighlights() {
    const response = await axios.get("https://www.scorebat.com/video-api/v1/");
    return response;
}

async function __getTeamDetails(name) {
    const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${name}`);
    return response.data;
}

async function __getLeagueTeams() {
    const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`);
    return response.data;
}

export {
    __getLatestHighlights,
    __getTeamDetails,
    __getLeagueTeams
}