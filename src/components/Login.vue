<template>
  <div class="main">
    <form class="container">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <facebook-login
      class="login-btn mt-3"
      appId="642229563343091"
      loginLabel="Login with facebook"
      @login="onLogin"
      @get-initial-status="getUserData"
      @sdk-loaded="sdkLoaded"
    >></facebook-login>
  </div>
</template>

<script>
import facebookLogin from "facebook-login-vuejs";
import { mapActions } from "vuex";

export default {
  name: "login",
  components: {
    facebookLogin,
  },
  methods: {
    ...mapActions({
      onLogin: "onLogin",
      sdkLoaded: "sdkLoaded",
      getUserData: "getUserData",
    }),
  },
};
</script>


<style>
.main {
  padding-top: 70px;
  border-bottom: 1px solid #eee;
  font-size: 15px;
}

.login-btn {
  color: white;
  min-width: 150px;
  height: 2.5rem;
  border-radius: 2rem;
  font-weight: 400;
  font-size: 0.8rem;
}
</style>