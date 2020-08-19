<template>
  <main class="container">
    <div class="row">
      <div class="col-sm-3">
        <Sidebar />
      </div>
      <div class="col-sm-9 main">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
import Sidebar from "../components/Sidebar";
export default {
  components: {
    Sidebar,
  },
};
</script>

<style>
.main {
  padding-top: 70px;
  border-bottom: 1px solid #eee;
  font-size: 15px;
}
</style>

