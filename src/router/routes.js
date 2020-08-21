import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from "../layout/MainLayout";
import Question from "../components/Question";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "home",
    component: MainLayout,
    children: [
      {
        path: "/",
        component: Question,
      },
    ],
  },
  { path: "*", redirect: "/" },
];

