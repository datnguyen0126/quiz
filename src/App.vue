<template>
  <div id="app">
    <Header v-bind:user="user" v-on:logout="logout" />
    <div class="containter">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import { mapState, mapActions } from "vuex";

export default {
  name: "App",

  components: {
    Header,
    Footer,
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
  methods: {
    ...mapActions({
      logout: "onLogout",
    }),
  },
};
</script>
<style>
@import "./assets/styles.css";
</style>

