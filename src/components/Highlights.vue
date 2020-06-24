<template>
  <div class="container highlight-container">
    <h2 class="title title__large">Latest football highlights</h2>
    <ul class="highlights-list">
      <fragment v-for="(video,index) in highlights" :key="'video'+index">
        <li class="highlights-list__item">
          <router-link :to="{name:'HighlightVideo',params:{id:video.id}}">
            <div class="thumbnail">
              <img :src="video.thumbnail" alt />
            </div>
            <div class="content">
              <h3 class="title title__small">{{video.title}}</h3>
              <p class="paragraph">{{video.competition.name}}</p>
            </div>
          </router-link>
        </li>
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

