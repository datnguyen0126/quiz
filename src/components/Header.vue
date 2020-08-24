<template>
  <nav>
    <router-link to="/" exact>
      <div class="logo">
        <img
          class="logo"
          src="../assets/quiz-logo.png"
          alt="Girl in a jacket"
          width="130"
          height="50"
        />
      </div>
    </router-link>
    <div class="cart-link">
      <router-link class="font-weight-bold text-light mr-3" to="/about">About us</router-link>
      <span v-if="user.isConnected" class="dropdown show">
          <img :src="user.picture"
          height="40px">
        <a
          class="btn btn-info"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >{{ user.name }}</a>

        <!-- <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <button class="dropdown-item" @click="testMethod">Đăng xuất</button>
        </div> -->
      </span>
      <router-link
        v-else
        class="btn btn-primary font-weight-bold text-light mr-3"
        to="/login"
        exact
      >Login</router-link>
    </div>
  </nav>
</template>

<script>

export default {
  props: ["user"],
  name: "header",
  methods: {
    
    sendLogoutEvent() {
      this.$emit("logout");
    },
  }
};
</script>

<style >
nav {
  box-shadow: 1px 0rem 14px 0px #eee;
  width: 100%;
  padding: 24px;
  position: fixed;
  height: 66px;
  color: white;
  background-color: #8658f3;
  z-index: 99;
}

.logo {
  float: left;
  position: relative;
  top: -7px;
}

.nav-link {
  display: inline;
}

.cart-link {
  float: right;
  position: relative;
  bottom: 9px;
}

.list-item {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.cart-link__count {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  top: -8px;
  right: -5px;
  background: #5044ff;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
</style>

