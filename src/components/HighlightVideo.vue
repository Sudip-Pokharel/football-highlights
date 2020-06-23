<template>
  <div class="container highlight-container">
    <h2 class="title title__medium">{{highlight.title}}</h2>
    <div class="video-box" v-html="highlight.videos[0].embed"></div>
  </div>
</template>

<script>
import { __getTeamDetails } from "../services/api";
export default {
  name: "HighlightVideo",
  props: ["highlight"],
  methods: {
    getTeamDetails() {
      __getTeamDetails(this.highlight.side1.name)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getTeamDetails();
  }
};
</script>
