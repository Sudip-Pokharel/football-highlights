<template>
  <div class="container highlight-container">
    <h2 class="title title__large">Latest football highlights</h2>
    <ul class="highlights-list" :key="'all-highlight-list'+unique_key">
      <fragment v-for="(video,index) in highlights" :key="'video'+index">
        <li class="highlights-list__item">
          <router-link :to="{name:'HighlightVideo',params:{id:video.id}}">
            <figure>
              <ImageItem :source="video.thumbnail" :alternate="video.title" />
              <figcaption class="content">
                <h3 class="title title__small">{{video.title}}</h3>
                <p class="paragraph">{{video.competition.name}}</p>
              </figcaption>
            </figure>
          </router-link>
        </li>
      </fragment>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ImageItem from "../ImageItem.vue";
export default {
  name: "Highlights",
  data() {
    return {
      unique_key: 0
    };
  },
  watch: {
    highlights() {
      this.unique_key += 1;
    }
  },
  methods: {},
  components: {
    ImageItem
  },
  computed: {
    ...mapGetters({
      highlights: "highlight/HIGHLIGHTS"
    })
  }
};
</script>

