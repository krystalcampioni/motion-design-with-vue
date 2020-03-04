import Vue from "vue";
import Router from "vue-router";
import Shark from "../components/Shark";
import Batoid from "../components/Batoid";

Vue.use(Router);

const router = new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      redirect: "/shark"
    },
    {
      path: "/shark",
      component: Shark
    },
    {
      path: "/batoid",
      component: Batoid
    }
  ]
});

export default router;
