import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/",
            name : "home",
            component: () => import("../pages/homePage.vue"),
        },
      {
        path: "/login",
        name: "login",
        component: () => import ("../pages/loginPage.vue") ,
      },
      {
        path: "/signup",
        name: "sign-up",
        component: () => import("../pages/signUpPage.vue"),
      },
    ]
    });
    export default router


    