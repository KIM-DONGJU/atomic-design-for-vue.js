import { createWebHistory, createRouter } from "vue-router";
import App from "../App.vue";
import Home from "../components/pages/Home/index.vue";

const routes = [
  {
    path: "/",
    name: "App",
    component: App,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
