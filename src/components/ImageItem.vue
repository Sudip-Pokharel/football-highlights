<template>
  <div class="thumbnail loading" v-lazyload>
    <img :data-url="source" :alt="alternate" />
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