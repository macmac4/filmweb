<template>

  <header id="header">
    <div class="container d-flex align-items-center justify-content-between">

      <div class="logo">
        <h1 class="text-light"><router-link to="/">FilmWeb<span>.</span></router-link></h1>
      </div>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><router-link to="/">Home</router-link></li>
          <li><router-link to="/films">List Films</router-link></li>
          <!-- <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li> -->
          <li><router-link to="/contact">Contact Us</router-link></li>

          <template v-if="user">
            <li class="get-started">
              <a @click="handleSubmit">Log out</a>
            </li>
          </template>
          <template v-else>
            <li class="get-started">
              <router-link v-if="!user" class="btn" :to="{ name: 'Signup' }">Signup</router-link>
            </li>
            <li class="get-started">
              <router-link v-if="!user" class="btn" :to="{ name: 'Login' }">Log in</router-link>
            </li>
          </template>
        </ul>
      </nav><!-- .nav-menu -->
      <div class="alert alert-danger mt-3" role="alert" v-if="error !== null"> {{ error }} </div>

    </div>
  </header><!-- End Header -->


</template>

<script>
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const { error, logout, isPending } = useLogout()
    const { user } = getUser()
    const router = useRouter()

    const handleSubmit = async () => {
      await logout()
      if (!error.value) {
        router.push({ name: 'Login'})
        console.log('logout')
      }
    }

    return {
      error: error,
      isPending: isPending,
      handleSubmit: handleSubmit,
      user: user,
    }
  }
}
</script>