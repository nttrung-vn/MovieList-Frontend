import { createWebHistory, createRouter } from "vue-router";
import MovieList from "@/views/MovieList.vue";

const routes = [
  {
    path: "/",
    name: "movielist",
    component: MovieList,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
