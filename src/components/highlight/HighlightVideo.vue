<template>
  <div class="highlight" v-if="Object.keys(highlight).length > 0">
    <div class="container highlight-container">
      <h2 class="title title__medium">{{highlight.title}}</h2>
      <div class="video-box" v-html="highlight.videos[0].embed"></div>
    </div>
    <div class="highlight-other" v-if="others.length">
      <div class="container">
        <h3 class="title title__medium">Other highlights</h3>
        <ul class="others-list">
          <fragment v-for="(other,index) in others" :key="'others-highlight'+index">
            <li class="others-list__item">
              <router-link :to="{name:'HighlightVideo',params:{id:other.id}}">
                <div class="thumbnail">
                  <img :src="other.thumbnail" alt />
                </div>
                <div class="content">
                  <h3 class="title title__small">{{other.title}}</h3>
                  <p class="paragraph">{{other.competition.name}}</p>
                </div>
              </router-link>
            </li>
          </fragment>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { __getTeamDetails } from "../../services/api";
export default {
  name: "HighlightVideo",
  props: ["highlight", "others"],
  data() {
    return {};
  },
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
  }
};
</script>
