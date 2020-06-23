<template>
  <div class="about">
    <HighlightVideo :highlight="datas" />
  </div>
</template>

<script>
import HighlightVideo from "@/components/HighlightVideo.vue";
import { mapGetters } from "vuex";
export default {
  name: "Watch",
  data() {
    return {
      datas: {}
    };
  },
  components: {
    HighlightVideo
  },
  computed: {
    ...mapGetters({
      highlights: "highlight/HIGHLIGHTS"
    })
  },
  created() {
    this.datas = this.highlights.find(
      highlight => highlight.id == Number(this.$route.params.id)
    );
  }
};
</script>
