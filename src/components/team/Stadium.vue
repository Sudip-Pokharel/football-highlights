<template>
  <div class="container">
    <article class="stadium">
      <h2 class="title title__main">{{team.strStadium}}</h2>

      <div class="image" v-if="team.strStadiumThumb">
        <img :src="team.strStadiumThumb" :alt="team.strTeam+' stadium'" />
      </div>

      <h3 class="title title__small">
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.188 0C2.74 0 0 2.79 0 6.3 0 10.98 6.188 18 6.188 18s6.187-7.02 6.187-11.7c0-3.51-2.74-6.3-6.188-6.3zm0 8.55c-1.238 0-2.21-.99-2.21-2.25s.972-2.25 2.21-2.25c1.237 0 2.21.99 2.21 2.25s-.973 2.25-2.21 2.25z"
            fill-rule="evenodd"
          />
        </svg>
        {{team.strStadiumLocation}}
      </h3>
      <div class="description-wrapper">
        <p class="paragraph">{{team.strStadiumDescription}}</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: ["team"]
};
</script>