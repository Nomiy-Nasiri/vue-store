import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    //   {
    //     path: "/",
    //     name: "dashboard",
    //     component: ,
    //   },
      {
        path: "/signup",
        name: "sign-up",
        component: () => import("../pages/signUpPage.vue"),
      },
    ]
    });
    export default router