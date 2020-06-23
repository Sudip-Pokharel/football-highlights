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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  box-sizing: inherit;
}

body {
  position: relative;
  line-height: 1.7;
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  color: #333333;
  background-color: #e1e1e1;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
}

ul {
  list-style-type: none;
}

a:link,
a:visited {
  text-decoration: none;
  color: #333333;
}

.title {
  line-height: 1.2;
  &__large {
    font-size: 3.2rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
  }
  &____small {
    font-size: 2rem;
    font-weight: 600;
  }
}

.main {
  padding: 5rem 0;
}

.highlight-container {
  .title.title__large {
    margin-bottom: 3rem;
  }
}

.highlights-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  &__item {
    display: flex;
    flex: 0 0 30rem;
    flex-direction: column;
    margin: 1rem 3rem 2rem 0;
    &:hover {
      cursor: pointer;
    }
    img {
      width: 100%;
      height: 22.5rem;
    }
  }
}

.highlight-container {
  text-align: center;
  .title.title__medium {
    margin-bottom: 2.8rem;
    font-size: 3.2rem;
  }
  .video-box {
    max-width: 74rem;
    margin: 0 auto;
  }
}

.highlight-other {
  margin-top: 4rem;

  .title.title__medium {
    margin-bottom: 2rem;
    text-align: center;
  }

  .others-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &__item {
      flex: 0 0 24rem;
      .title.title__small {
        font-size: 1.6rem;
      }
      p.paragraph {
        font-size: 1.3rem;
      }
      &:hover {
        cursor: pointer;
      }
      &:not(:last-child) {
        margin-right: 1.2rem;
      }
      img {
        width: 100%;
        height: 17rem;
      }
    }
  }
}

.team-container {
  .title.title__large {
    margin-bottom: 2.2rem;
  }
}

.team-list {
  display: flex;
  flex-wrap: wrap;
  &__item {
    flex: 0 0 31%;
    margin: 1%;
    margin-bottom: 2rem;
    a {
      display: flex;
      align-items: center;
      img {
        width: 8rem;
        height: 8rem;
      }
      .team-detail {
        padding-left: 1.2rem;
        .title.title__medium {
          margin-bottom: 0.8rem;
        }
        .title.title__small {
          margin-bottom: 0.1rem;
        }
        p.parahraph {
          font-size: 1.4rem;
        }
      }
    }
  }
}
</style>