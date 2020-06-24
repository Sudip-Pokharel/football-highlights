<template>
  <div class="container team-container">
    <h2 class="title title__large">Premier League Teams</h2>
    <ul class="team-list">
      <fragment v-for="(team,index) in teams" :key="'team-list-item'+index">
        <li class="team-list__item">
          <router-link :to="{name:'TeamDetail',params:{id:team.id}}">
            <img :src="team.strTeamBadge" :alt="team.strTeam+' badge'" />
            <div class="team-detail">
              <h2 class="title title__medium">{{team.strTeam}}</h2>
              <span class="stadium-name">{{team.strStadium}}</span>
              <p class="paragraph">{{team.strStadiumLocation}}</p>
            </div>
          </router-link>
        </li>
      </fragment>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Teams",
  methods: {
    ...mapActions({
      fetchTeams: "team/FETCH_TEAMS"
    })
  },
  created() {
    this.fetchTeams();
  },
  computed: {
    ...mapGetters({
      teams: "team/TEAMS"
    })
  }
};
</script>