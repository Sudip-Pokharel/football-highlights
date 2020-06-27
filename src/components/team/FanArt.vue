<template>
  <div class="container">
    <article class="fanart">
      <h2 class="title title__main">Fan Art</h2>
      <fragment v-for="index in 4" :key="'fanart_image'+index">
        <div class="image loading" v-lazyload>
          <img :data-url="team['strTeamFanart'+index]" alt />
        </div>
      </fragment>
    </article>
  </div>
</template>
<script>
export default {
  props: ["team"]
};
</script>