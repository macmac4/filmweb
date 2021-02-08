import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import LoginForm from "../views/auth/LoginForm.vue";
import SignUpForm from "../views/auth/SignUpForm.vue";
import CreateCategoryList from "../views/categorylists/CreateCategoryList.vue";
import ShowCategoryList from "../views/categorylists/ShowCategoryList.vue";
import CreateFilm from "../views/films/CreateFilm.vue";
import ShowFilms from "../views/films/ShowFilms.vue";
import MetricFilm from "../views/films/MetricFilm.vue";
import { projectAuth } from '../firebase/config';

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next(  { name: 'Login'} )
  } else {
    next()
  }
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/login",
    name: "Login",
    component: LoginForm
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignUpForm
  },
  {
    path: "/category/create",
    name: "CategoryCreate",
    component: CreateCategoryList,
    beforeEnter: requireAuth,
  },
  {
    path: "/film/create",
    name: "FilmCreate",
    component: CreateFilm,
    beforeEnter: requireAuth,
  },
  {
    path: "/film/list",
    name: "FilmList",
    component: ShowFilms
  },
  {
    path: "/film/:id",
    name: "FilmMetric",
    component: MetricFilm,
    props: true,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
