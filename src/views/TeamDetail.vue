<template>
  <div class="container">
    <Team :team="teamData" />
  </div>
</template>

<script>
import Team from "@/components/Team.vue";
import { mapGetters } from "vuex";
export default {
  name: "TeamDetail",
  data() {
    return {
      teamData: {}
    };
  },
  watch: {
    "$route.params.id"() {
      this.getTeam();
    }
  },
  methods: {
    getTeam() {
      let foundTeam = this.teams.find(team => team.id == this.$route.params.id);
      if (foundTeam) {
        this.teamData = foundTeam;
      } else {
        this.$router.push({ name: "Teams" });
      }
    }
  },
  components: {
    Team
  },
  created() {
    this.getTeam();
  },
  computed: {
    ...mapGetters({
      teams: "team/TEAMS"
    })
  }
};
</script>