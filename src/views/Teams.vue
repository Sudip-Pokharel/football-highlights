<template>
  <div class="container team-container">
    <h2 :class="loading ? 'loading title title__large':'title title__large'">{{teams[0].strLeague}}</h2>
    <ul class="team-list" :key="'all-team'+unique_key">
      <fragment v-for="(team,index) in teams" :key="'team-list-item'+index">
        <li :class=" loading ?  'team-list__item loading' : 'team-list__item'">
          <router-link :to="{name:'TeamDetail',params:{id:team.id}}" v-lazyload class="loading">
            <img :data-url="team.strTeamBadge" :alt="team.strTeam+' badge'" />
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
  data() {
    return {
      loading: true,
      unique_key: 0
    };
  },
  watch: {
    "$route.params.leagueID"() {
      this.getTeams();
      document.querySelector("body").classList.remove("menu-open");
    },
    teams() {
      this.unique_key += 1;
    }
  },
  methods: {
    getTeams() {
      this.loading = true;
      this.fetchTeams({ id: this.$route.params.leagueID }).then(() => {
        this.loading = false;
      });
    },
    ...mapActions({
      fetchTeams: "team/FETCH_TEAMS"
    })
  },
  created() {
    // 4331->germany
    // 4335->spain
    // 4328->england
    // 4332->italy
    // 4334->franch
    this.getTeams();
    document.querySelector("body").classList.remove("menu-open");
  },
  computed: {
    ...mapGetters({
      teams: "team/TEAMS"
    })
  }
};
</script>