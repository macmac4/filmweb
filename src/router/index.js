import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Collection from "../views/Collection.vue";
import LoginForm from "../views/auth/LoginForm.vue";
import SignUpForm from "../views/auth/SignUpForm.vue";
import CreateCategoryList from "../views/categorylists/CreateCategoryList.vue";
import { projectAuth } from '../firebase/config'

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next(  { name: 'welcome'} )
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
    path: "/films",
    name: "Films",
    component: Collection
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
    component: CreateCategoryList
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
