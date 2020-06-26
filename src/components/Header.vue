<template>
  <div class="header-wrapper">
    <div class="container header-container">
      <nav>
        <router-link :to="{name:'Highlight'}" class="nav-logo" @click.prevent>FUTBOL</router-link>
        <ul class="navigation">
          <li class="menu-trigger--open">
            <a href @click.prevent="menuOpen">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18">
                <g fill-rule="evenodd">
                  <path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z" />
                </g>
              </svg>
            </a>
          </li>
          <li class="menu-trigger--close">
            <a href @click.prevent="menuClose">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22">
                <path
                  fill-rule="evenodd"
                  d="M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z"
                />
              </svg>
            </a>
          </li>
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
            <router-link
              class="navigation__link"
              :to="{name:'Teams',params:{leagueID:4332}}"
            >Serie A</router-link>
          </li>
          <li class="navigation__item">
            <input type="checkbox" id="themeChanger" @change="updateTheme()" />
            <label for="themeChanger" class="theme-label">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
                <title>ionicons-v5-j</title>
                <path
                  d="M160,136c0-30.62,4.51-61.61,16-88C99.57,81.27,48,159.32,48,248c0,119.29,96.71,216,216,216,88.68,0,166.73-51.57,200-128-26.39,11.49-57.38,16-88,16C256.71,352,160,255.29,160,136Z"
                  style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
                />
              </svg>
              Dark Mode
            </label>
          </li>
        </ul>
      </nav>
    </div>
    <div id="mobileNav">
      <ul>
        <li>
          <router-link class="navigation__link" :to="{name:'Highlight'}">highlights</router-link>
        </li>
        <li>
          <router-link
            class="navigation__link"
            :to="{name:'Teams',params:{leagueID:4328}}"
          >Premier League</router-link>
        </li>
        <li>
          <router-link class="navigation__link" :to="{name:'Teams',params:{leagueID:4335}}">LaLiga</router-link>
        </li>
        <li>
          <router-link
            class="navigation__link"
            :to="{name:'Teams',params:{leagueID:4331}}"
          >Bundesliga</router-link>
        </li>
        <li>
          <router-link class="navigation__link" :to="{name:'Teams',params:{leagueID:4332}}">Serie A</router-link>
        </li>
        <li class="theme-changer-box">
          <input type="checkbox" id="mobileThemeChanger" @change="updateTheme()" />
          <label for="mobileThemeChanger" class="theme-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
              <title>ionicons-v5-j</title>
              <path
                d="M160,136c0-30.62,4.51-61.61,16-88C99.57,81.27,48,159.32,48,248c0,119.29,96.71,216,216,216,88.68,0,166.73-51.57,200-128-26.39,11.49-57.38,16-88,16C256.71,352,160,255.29,160,136Z"
                style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
              />
            </svg>
            Dark Mode
          </label>
        </li>
      </ul>
    </div>
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
    menuOpen() {
      document.querySelector("body").classList.add("menu-open");
    },
    menuClose() {
      document.querySelector("body").classList.remove("menu-open");
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
  },
  created() {
    this.checkDarkMode();
  }
};
</script>