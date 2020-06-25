<template>
  <div class="container header-container">
    <nav>
      <ul class="navigation">
        <li class="navigation__item">
          <router-link class="navigation__link" :to="{name:'Highlight'}">highlights</router-link>
        </li>
        <li class="navigation__item">
          <router-link
            class="navigation__link"
            :to="{name:'Teams',params:{leagueID:4328}}"
          >Premier League</router-link>
        </li>
        <li class="navigation__item">
          <router-link class="navigation__link" :to="{name:'Teams',params:{leagueID:4335}}">LaLiga</router-link>
        </li>
        <li class="navigation__item">
          <router-link
            class="navigation__link"
            :to="{name:'Teams',params:{leagueID:4331}}"
          >Bundesliga</router-link>
        </li>
        <li class="navigation__item">
          <router-link class="navigation__link" :to="{name:'Teams',params:{leagueID:4332}}">Serie A</router-link>
        </li>
      </ul>
    </nav>
    <input type="checkbox" id="themeChanger" @change="updateTheme()" />
    <label for="themeChanger">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
        <title>ionicons-v5-j</title>
        <path
          d="M160,136c0-30.62,4.51-61.61,16-88C99.57,81.27,48,159.32,48,248c0,119.29,96.71,216,216,216,88.68,0,166.73-51.57,200-128-26.39,11.49-57.38,16-88,16C256.71,352,160,255.29,160,136Z"
          style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
        />
      </svg>
      Dark Mode
    </label>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    updateTheme() {
      this.updateMode({ state: !this.darkMode.state });
      this.checkDarkMode();
    },
    checkDarkMode() {
      if (this.darkMode.state) {
        document.querySelector("body").classList.add("dark-mode");
      } else {
        document.querySelector("body").classList.remove("dark-mode");
      }
    },
    ...mapActions({
      fetchHighlights: "highlight/FETCH_HIGHLIGHTS",
      updateMode: "state/UPDATE_DARK_MODE"
    })
  },
  computed: {
    ...mapGetters({
      darkMode: "state/DARK_MODE"
    })
  }
};
</script>