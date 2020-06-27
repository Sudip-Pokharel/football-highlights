<template>
  <div class="thumbnail">
    <img :data-url="source" src :alt="alternate" />
  </div>
</template>

<script>
export default {
  name: "ImageItem",
  props: {
    source: {
      type: String,
      required: true
    },
    alternate: {
      type: String
    }
  }
};
</script>