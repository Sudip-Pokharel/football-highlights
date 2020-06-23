<template>
  <div>
    <img :src="team.strTeamBanner" alt />
    <p class="paragraph">{{team.strDescriptionEN}}</p>
  </div>
</template>

<script>
export default {
  name: "IndividualTeam",
  props: ["team"]
};
</script>