<template>
  <div class="container">
    <article class="overview">
      <h2 class="title title__main">Overview</h2>

      <div class="header__banner" v-if="team.strTeamBanner" :style="bannerBackgound"></div>

      <h4 class="title title__medium" v-if="team.strAlternate">{{team.strAlternate}}</h4>

      <div class="description-wrapper">
        <p class="paragraph">{{team.strDescriptionEN}}</p>
      </div>
      <div class="team-logo" v-if="team.strTeamLogo">
        <img :src="team.strTeamLogo" :alt="team.strTeam+'Logo'" />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: ["team"],
  computed: {
    bannerBackgound: {
      get: function() {
        return {
          backgroundImage: "url(" + this.team.strTeamBanner + ")"
        };
      }
    }
  }
};
</script>