import router from '../router'

const state = {
  isConnected: false,
  name: "",
  email: "",
  personalID: "",
  picture: "",
  FB: undefined,
};

const actions = {
  sdkLoaded(context, payload) {
    state.isConnected = payload.isConnected;
    state.FB = payload.FB;
    if (state.isConnected) context.commit("getUserData");
  },
  onLogin(context) {
    state.isConnected = true;
    context.commit("getUserData");
    router.push('/')
  },
  onLogout() {
    state.isConnected = false;
    router.push('/login')
  },
};

const mutations = {
  getUserData() {
    state.FB.api(
      "/me",
      "GET",
      { fields: "id,name,email,picture" },
      (user) => {
        state.personalID = user.id;
        state.email = user.email;
        state.name = user.name;
        state.picture = user.picture.data.url;
      }
    );
  },
};

export const user = {
  namespace: true,
  state,
  actions,
  mutations,
};
