import { createRouter, createWebHistory } from "vue-router";
import useAuthUser from "@/composables/UseAuthUser";

const routes = [
  {
    name: "EmailConfirmation",
    path: "/email-confirmation",
    component: () => import("@/pages/EmailConfirmation.vue"),
  },
  {
    name: "Home",
    path: "/",
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    name: "Me",
    path: "/me",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/MeMyself.vue"),
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("@/pages/LogIn.vue"),
  },
  {
    name: "ForgotPassword",
    path: "/forgotPassword",
    component: () => import("@/pages/ForgotPassword.vue"),
  },
  {
    name: "Logout",
    path: "/logout",
    beforeEnter: async () => {
      const { logout } = useAuthUser();
      await logout();
      return { name: "Home" };
    },
  },
  {
    name: "Register",
    path: "/register",
    component: () => import("@/pages/RegisterNow.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const { isLoggedIn } = useAuthUser();

  if (to.meta.requiresAuth && !isLoggedIn()) {
    // If the route requires authentication and the user is not logged in,
    // redirect to the Login page
    next({ name: "Login" });
  } else if (to.name === "Login" && isLoggedIn()) {
    // If the user is already logged in and tries to access the Login page,
    // redirect to the Home page
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
