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

// DARK THEME
$color-bg-1-dark: hsl(230, 17%, 14%); //BACKGROUND
$color-bg-2-dark: hsl(232, 19%, 15%); //TOP BACKGROUND PATTERN
$color-card-dark: hsl(228, 28%, 20%); //CARD BACKGROUND
$color-text-dark: hsl(228, 34%, 66%); //TEXT
$color-white-text-dark: hsl(0, 0%, 100%); //TEXT
$color-hover-dark: #2f3552; //HOVER BG

// LIGHT THEME
$color-bg-1-light: hsl(0, 0%, 100%); //BACKGROUND
$color-bg-2-light: hsl(225, 100%, 98%); //TOP BACKGROUND PATTERN
$color-card-light: hsl(227, 47%, 96%); //CARD BACKGROUND
$color-text-light: hsl(228, 12%, 44%); //TEXT
$color-blue-text-light: hsl(230, 17%, 14%); //TEXT
$color-hover-light: #e6e8f1; //HOVER

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
  color: $color-blue-text-light;
  background-color: $color-bg-1-light;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 18rem;
    background-color: $color-bg-2-light;
    z-index: -1;
  }
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
  font-weight: 600;
  color: $color-blue-text-light;
  font-weight: 600;
  &__main {
    font-size: 4.2rem;
  }
  &__large {
    font-size: 3.2rem;
    text-transform: uppercase;
  }
  &____small {
    font-size: 2rem;
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
    background-color: $color-card-light;
    border-radius: 0.5rem;
    margin: 1rem 3rem 2rem 0;
    transition: 0.2s ease-in-out;
    .title.title__small {
      margin-bottom: 0.5rem;
    }
    &:hover {
      cursor: pointer;
      background-color: $color-hover-light;
      overflow: hidden;
      img {
        transform: scale(1.03);
      }
    }
    .thumbnail {
      height: 22.5rem;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        transition: 0.2s ease-in-out;
      }
    }
    .content {
      padding: 1rem;
      p.paragraph {
        color: $color-text-light;
      }
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
      background-color: $color-card-light;
      transition: 0.2s ease-in-out;
      &:hover {
        background-color: $color-hover-light;
      }
      .thumbnail {
        height: 17rem;
        overflow: hidden;
        img {
          height: 100%;
          width: 100%;
          transition: 0.3s ease-in-out;
        }
      }
      .content {
        padding: 0.8rem;
        text-align: center;
        .title.title__small {
          font-size: 1.6rem;
        }
        p.paragraph {
          font-size: 1.3rem;
        }
      }
      &:hover {
        cursor: pointer;
        .thumbnail {
          img {
            transform: scale(1.03);
          }
        }
      }
      &:not(:last-child) {
        margin-right: 1.2rem;
      }
    }
  }
}

.team-container {
  .title.title__large {
    margin-bottom: 2.2rem;
    text-align: center;
  }
}

.team-list {
  display: flex;
  flex-wrap: wrap;
  &__item {
    flex: 0 0 31%;
    margin: 1%;
    margin-bottom: 2rem;
    padding: 0.8rem 0.5rem 0.8rem 1rem;
    border-radius: 0.5rem;
    background-color: $color-card-light;
    transition: 0.2s ease-in-out;
    border-left: 0.3rem solid transparent;
    &:hover {
      border-left: 0.3rem solid $color-hover-dark;
      background-color: $color-hover-light;
    }
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
          margin-bottom: 0.4rem;
          font-weight: 600;
        }
        .stadium-name {
          font-size: 1.4rem;
          font-weight: 600;
        }
        p.paragraph {
          font-size: 1.3rem;
        }
      }
    }
  }
}

.team {
  &__header {
    padding: 2.2rem 0;
    .header__banner {
      width: 70%;
      padding-bottom: 12%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left;
    }
    .header-box {
      display: flex;
      align-items: center;
      padding: 2rem;
      border-radius: 0.8rem;
      margin-bottom: 4rem;
      .team__logo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15rem;
        height: 15rem;
        border-radius: 100%;
        background-color: #ffffff;
        margin-right: 2rem;
        img {
          width: 10rem;
          height: 10rem;
        }
      }
      .team__brief {
        .title.title__main {
          margin-bottom: 0.5rem;
        }
        ul.media {
          display: flex;
          align-items: center;
          margin-top: 0.7rem;
          li {
            background-color: #ffffff;
            width: 4rem;
            height: 4rem;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            &:not(:last-child) {
              margin-right: 1rem;
            }
            a {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
      }
    }
  }
}
</style>