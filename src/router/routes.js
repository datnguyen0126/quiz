import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from "../layout/MainLayout";
import Question from "../components/Question";
import TestInfo from "../components/TestInfo";
import Introduction from "../components/Introduction";
import Login from "../components/Login";
import About from "../components/About";
import Result from "../components/Result";

Vue.use(VueRouter);

import dataStore from "../store";

export const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/result",
    component: Result,
  },
  {
    path: "/",
    name: "home",
    component: MainLayout,
    beforeEnter(to, from, next) {
      if (dataStore.state.user.isConnected) {
        next();
      } else {
        next("/login");
      }
    },
    children: [
      {
        path: "/",
        component: Introduction,
      },
      {
        path: "/:level",
        component: TestInfo,
      },
      {
        path: "/:level/question/:id",
        component: Question,
      },
    ],
  },
  { path: "*", redirect: "/" },
];
