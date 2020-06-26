<template>
  <div class="home">
    <Highlights />
  </div>
</template>

<script>
// @ is an alias to /src
import Highlights from "@/components/highlight/Highlights.vue";

export default {
  name: "AllHighlights",
  components: {
    Highlights
  },
  created() {
    document.querySelector("body").classList.remove("menu-open");
  }
};
</script>

