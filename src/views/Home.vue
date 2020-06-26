<script>
export default {
  name: "Home",
  beforeRouteEnter(to, from, next) {
    next({ name: "Highlight" });
  }
};
</script>