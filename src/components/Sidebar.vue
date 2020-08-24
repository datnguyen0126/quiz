<template>
  <aside>
    <div class="aside-block">
      <div v-if="isDoing">
        <h4>Time left</h4>
        <h4>Answer: 5/10</h4>
        <router-link to='/result' class="text-light"><button v-on:click="stopQuiz" class="btn btn-primary">Submit</button></router-link>
      </div>
      <ul v-else class="list-group">
        <router-link class="list-group-item" to="/easy">Easy</router-link>
        <router-link class="list-group-item" to="/medium">Medium</router-link>
        <router-link class="list-group-item" to="/hard">Hard</router-link>
        <router-link class="list-group-item" to="/expert">Expert</router-link>
      </ul>
    </div>
  </aside>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: "Sidebar",
  computed: {
    ...mapState({
      isDoing: state => state.questions.isDoing
    })
  },
  methods: {
    ...mapActions({
      stopQuiz: 'stopQuiz'
    })
  }
};
</script>

<style>
.aside-block {
  padding-top: 70px;
  border-bottom: 1px solid #eee;
  font-size: 15px;
}
</style>

