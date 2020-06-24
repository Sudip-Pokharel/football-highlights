<template>
  <div class="container">
    <article class="jersey">
      <h2 class="title title__main">Jersey</h2>
      <div class="image">
        <img :src="team.strTeamJersey" :alt="team.strTeam+' jersey'" />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: ["team"]
};
</script>