<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Header from "./components/Header.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      fetchHighlights: "highlight/FETCH_HIGHLIGHTS"
    })
  },
  components: {
    Header
  },
  created() {
    this.fetchHighlights();
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

@mixin media($breaking-point) {
  @media (max-width: $breaking-point) {
    @content;
  }
}

@mixin min-media($breaking-point) {
  @media (min-width: $breaking-point) {
    @content;
  }
}

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
    height: 22rem;
    background-color: $color-bg-2-light;
    z-index: -1;
  }
  &.dark-mode {
    color: $color-white-text-dark;
    background-color: $color-bg-1-dark;
    &::before {
      background-color: $color-bg-2-dark;
    }
  }
  &.menu-open {
    @include media(768px) {
      overflow: hidden;
    }
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
  color: $color-blue-text-light;
}

body.dark-mode {
  .title {
    color: $color-white-text-dark;
  }
  a:link,
  a:visited {
    text-decoration: none;
    color: $color-white-text-dark;
  }
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
  &__medium {
    font-size: 2.4rem;
  }
  &____small {
    font-size: 2rem;
  }
}

body.menu-open {
  @include media(768px) {
    .header-wrapper {
      #mobileNav {
        display: flex;
        opacity: 1;
      }
    }
    .header-container {
      .navigation {
        .menu-trigger--close {
          display: list-item;
        }
        .menu-trigger--open {
          display: none;
        }
      }
    }
  }
}

.header-wrapper {
  #mobileNav {
    position: absolute;
    top: 9rem;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 9rem);
    background-color: rgba($color-bg-1-light, 0.99);
    z-index: 99;
    display: none;
    opacity: 0;

    ul {
      padding: 1rem 2rem;
      width: 100%;
      li {
        &:not(:last-child) {
          padding: 2rem 0;
          border-bottom: 0.1rem solid $color-text-dark;
        }
        a {
          padding: 0 1rem;
          display: flex;
          justify-content: center;
          text-transform: uppercase;
          font-size: 1.8rem;
          letter-spacing: 0.1rem;
          transition: 0.2s ease-in-out;
          font-weight: 600;
          &:hover {
            color: $color-text-light;
          }
        }
      }
      #mobileThemeChanger {
        display: none;
      }
      .theme-changer-box {
        position: absolute;
        bottom: 4rem;
        left: 50%;
        transform: translateX(-50%);
      }
      label {
        letter-spacing: 0.1rem;
        font-weight: 600;
      }
    }
  }
  label.theme-label {
    display: flex;
    margin-right: 1rem;
    font-size: 1.4rem;
    transition: 0.2s ease-in-out;
    svg {
      margin-right: 0.5rem;
      path {
        transition: 0.2s ease-in-out;
        stroke: $color-blue-text-light;
      }
    }
    &:hover {
      cursor: pointer;
      color: $color-text-light;
      svg {
        path {
          stroke: $color-text-light;
        }
      }
    }
  }
}

.header-container {
  position: relative;
  z-index: 999;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-logo {
      font-size: 3.2rem;
      font-weight: 300;
      letter-spacing: 0.2rem;
    }
  }
  padding-bottom: 3rem;
  .navigation {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .menu-trigger--open,
    .menu-trigger--close {
      @include min-media(769px) {
        display: none;
      }
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          path {
            fill: $color-blue-text-light;
          }
        }
      }
    }
    .menu-trigger--close {
      display: none;
    }
    &__item {
      &:not(:last-child) {
        margin-right: 1rem;
      }
      &:last-child {
        margin-left: 3rem;
      }
      @include media(768px) {
        display: none;
      }
    }
    &__link {
      padding: 1rem;
      display: flex;
      text-transform: uppercase;
      font-size: 1.5rem;
      letter-spacing: 0.1rem;
      transition: 0.2s ease-in-out;
      font-weight: 600;
      &:hover {
        color: $color-text-light;
      }
    }

    #themeChanger {
      display: none;
    }
  }
}

.main {
  padding: 2rem 0 5rem;
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
    flex: 0 0 26rem;
    flex-direction: column;
    background-color: $color-card-light;
    border-radius: 0.5rem;
    margin: 1rem 3rem 2rem 0;
    transition: 0.2s ease-in-out;
    @include media(375px) {
      flex-basis: 98%;
      margin-left: 0;
      margin-right: 0;
    }
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
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      @include media(375px) {
        height: auto;
      }
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
    max-width: 100rem;
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
      margin: 0 1.2rem 1.6rem;
      &:hover {
        background-color: $color-hover-light;
      }
      @include media(375px) {
        flex-basis: 98%;
      }
      .thumbnail {
        height: 17rem;
        overflow: hidden;
        @include media(375px) {
          height: auto;
        }
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
    }
  }
}

.team-container {
  .title.title__large {
    margin-bottom: 2.2rem;
    text-align: center;
    &.loading {
      opacity: 0;
      visibility: hidden;
    }
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
    @include media(991px) {
      flex: 0 0 48%;
    }
    @include media(680px) {
      flex: 0 0 98%;
      justify-content: center;
    }
    &.loading {
      &:hover {
        border-left: 0.3rem solid transparent;
        background-color: $color-card-light;
      }
      position: relative;
      min-height: 8rem;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: rgba($color-hover-light, 0.3);
        animation: loading 3.2s infinite;
      }
      a {
        display: none;
        opacity: 0;
        visibility: hidden;
      }
      @for $i from 1 through 20 {
        &:nth-child(#{$i}) {
          &::before {
            animation-delay: #{$i * 100}ms;
          }
        }
      }
    }
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

    .header-box {
      display: flex;
      align-items: center;
      padding: 2rem;
      border-radius: 0.8rem;
      @include media(580px) {
        position: relative;
        flex-direction: column;
        padding: 0 0 2rem;
        background: $color-card-light !important;
        text-align: center;
      }
      .team__image {
        width: 100%;
        padding-bottom: 20rem;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: none;
        @include media(580px) {
          display: list-item;
        }
        img {
          width: 100%;
        }
      }
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
        @include media(580px) {
          position: absolute;
          top: 14rem;
          width: 12rem;
          height: 12rem;
          margin-right: 0;
          img {
            width: 8rem;
            height: 8rem;
          }
        }
      }
      .team__brief {
        @include media(580px) {
          padding-top: 7.2rem;
        }
        .title.title__main {
          margin-bottom: 0.5rem;
        }
        .official-website {
          a {
            text-decoration: underline;
          }
        }
        ul.media {
          display: flex;
          align-items: center;
          margin-top: 0.7rem;
          @include media(580px) {
            margin-top: 1rem;
            justify-content: center;
          }
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
              padding: 1.08rem;
            }
          }
        }
      }
    }

    .groun-btn-box {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: -3rem 2rem 0 auto;
      transition: 0.2s ease-in-out;
      @include media(991px) {
        margin-top: 0rem;
      }
      @include media(580px) {
        flex-wrap: wrap;
        max-width: 100%;
        margin-right: auto;
      }
      .btn-item {
        transition: 0.2s ease-in-out;
        @include media(580px) {
          flex: 0 0 48%;
          margin: 0.4rem;
        }
        a {
          display: block;
          text-align: center;
          background-color: $color-card-light;
          padding: 2rem 2.8rem;
          transition: 0.2s ease-in-out;
          color: $color-text-light;
          text-transform: uppercase;
          font-weight: 600;
          &:hover {
            background-color: $color-hover-light;
          }
          &.active {
            color: $color-blue-text-light;
            background-color: $color-bg-1-light;
            box-shadow: 0 0.2rem 0.6rem -0.4rem rgba(0, 0, 0, 0.3);
          }
        }
      }
    }
  }
  article.overview {
    .title.title__main {
      margin-bottom: 1.2rem;
      text-transform: capitalize;
    }
    .header__banner {
      width: 100%;
      padding-bottom: 20%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      margin-bottom: 2rem;
    }

    .title.title__medium {
      margin-bottom: 0.8rem;
    }

    .description-wrapper {
      columns: 40rem;
      column-gap: 8rem;
      margin-bottom: 4rem;
      p.paragraph {
        font-size: 1.5rem;
        line-height: 32px;
      }
    }

    .team-logo {
      max-width: 50rem;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
  }
  article.stadium {
    .title.title.title__main {
      margin-bottom: 2rem;
      text-transform: capitalize;
    }
    .title.title__small {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
      svg {
        margin-right: 0.7rem;
        path {
          fill: $color-blue-text-light;
        }
      }
    }
    .image {
      width: 100%;
      margin-bottom: 0.7rem;
      img {
        width: 100%;
      }
    }
    .description-wrapper {
      columns: 40rem;
      column-gap: 8rem;
      margin-bottom: 4rem;
      p.paragraph {
        font-size: 1.5rem;
        line-height: 32px;
      }
    }
  }
  article.jersey {
    .title.title__main {
      margin-bottom: 2rem;
    }
    .image {
      width: 100%;
      overflow: hidden;
      img {
        width: auto;
      }
    }
  }
  article.fanart {
    .title.title__main {
      margin-bottom: 2rem;
    }
    .image {
      margin-bottom: 2rem;
      width: 100%;
      &:hover {
        animation: slideUp 0.4s linear;
      }
      img {
        width: 100%;
      }
    }
  }
}

@keyframes loading {
  0% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.3rem);
  }
  100% {
    transform: translateY(0);
  }
}

body.dark-mode {
  .header-wrapper {
    #mobileNav {
      background-color: rgba($color-bg-1-dark, 0.99);
      ul {
        li {
          &:not(:last-child) {
            border-bottom: 0.1rem solid $color-text-light;
          }
          a {
            &:hover {
              color: $color-text-dark;
            }
          }
        }
      }
    }
    label {
      svg {
        path {
          stroke: $color-white-text-dark;
        }
      }
      &:hover {
        color: $color-text-dark;
        svg {
          path {
            stroke: $color-text-dark;
          }
        }
      }
    }
  }
  .header-container {
    .navigation {
      .menu-trigger--open,
      .menu-trigger--close {
        a {
          svg {
            path {
              fill: $color-white-text-dark;
            }
          }
        }
      }
      &__link {
        &:hover {
          color: $color-text-dark;
        }
      }
    }
  }
  .highlights-list {
    &__item {
      background-color: $color-card-dark;
      &:hover {
        background-color: $color-hover-dark;
      }
      .content {
        p.paragraph {
          color: $color-text-dark;
        }
      }
    }
  }
  .highlight-other {
    .others-list {
      &__item {
        background-color: $color-card-dark;
        &:hover {
          background-color: $color-hover-dark;
        }
        .content {
          p.paragraph {
            color: $color-text-dark;
          }
        }
      }
    }
  }

  .team-list {
    &__item {
      background-color: $color-card-dark;
      &.loading {
        &:hover {
          border-color: transparent;
          background-color: $color-card-dark;
        }
        &::before {
          background-color: rgba($color-hover-dark, 0.3);
        }
      }
      &:hover {
        border-left: 0.3rem solid $color-hover-light;
        background-color: $color-hover-dark;
      }
      a {
        .team-detail {
          .stadium-name {
            color: $color-text-dark;
          }
          p.paragraph {
            color: $color-text-dark;
          }
        }
      }
    }
  }
  .team {
    &__header {
      .header-box {
        @include media(580px) {
          background: $color-card-dark !important;
        }
        .team__logo {
          background-color: $color-bg-1-dark;
        }
        .team__brief {
          ul.media {
            li {
              background-color: $color-bg-1-dark;
            }
          }
        }
      }
      .groun-btn-box {
        .btn-item {
          a {
            background-color: $color-card-dark;
            color: $color-text-dark;
            &:hover {
              background-color: $color-hover-dark;
            }
            &.active {
              color: $color-white-text-dark;
              background-color: $color-bg-1-dark;
              box-shadow: 0 0.2rem 0.6rem -0.4rem rgba($color-hover-dark, 0.9);
            }
          }
        }
      }
    }
    article.stadium {
      .title.title__small {
        svg {
          path {
            fill: $color-white-text-dark;
          }
        }
      }
    }
  }
}
</style>