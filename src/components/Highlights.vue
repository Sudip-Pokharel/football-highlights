<template>
  <div class="container">
    <h2 class="title title__medium">Latest football highlights</h2>
    <ul class="highlights-list">
      <fragment v-for="(video,index) in highlights" :key="'video'+index">
        <router-link
          tag="li"
          class="highlights-list__item"
          :to="{name:'Highlight',params:{id:video.id}}"
        >
          <img :src="video.thumbnail" alt />
          <h3 class="title title__small">{{video.competition.name}}</h3>
          <p class="paragraph">{{video.title}}</p>
        </router-link>
      </fragment>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Highlights",
  data() {
    return {
      videos: []
    };
  },
  methods: {},
  computed: {
    ...mapGetters({
      highlights: "highlight/HIGHLIGHTS"
    })
  },
  created() {}
};
</script>

