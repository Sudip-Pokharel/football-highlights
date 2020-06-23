<template>
  <div id="app" v-if="!loading">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      loading: true
    };
  },
  methods: {
    ...mapActions({
      fetchHighlights: "highlight/FETCH_HIGHLIGHTS"
    })
  },
  created() {
    this.fetchHighlights().then(() => {
      this.loading = false;
    });
  }
};
</script>
<style lang="scss">
@import url("./style/_style.scss");
</style>

