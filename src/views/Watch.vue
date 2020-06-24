<template>
  <div class="about">
    <HighlightVideo :highlight="datas" :others="otherData" />
  </div>
</template>

<script>
import HighlightVideo from "@/components/highlight/HighlightVideo.vue";
import { mapGetters } from "vuex";
export default {
  name: "Watch",
  data() {
    return {
      datas: {},
      otherData: []
    };
  },
  watch: {
    "$route.params.id"() {
      this.getDatas();
    }
  },
  methods: {
    getDatas() {
      let foundHighlight = this.highlights.find(
        highlight => highlight.id == Number(this.$route.params.id)
      );
      if (foundHighlight) {
        this.datas = foundHighlight;
        let count = 0;
        this.otherData = [];
        this.highlights.filter(highlight => {
          if (count < 3 && highlight.id != Number(this.$route.params.id)) {
            count += 1;
            this.otherData.push(highlight);
          }
        });
      } else {
        this.$router.push({ name: "Highlight" });
      }
    }
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
    this.getDatas();
  }
};
</script>
