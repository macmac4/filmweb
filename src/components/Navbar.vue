<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>

    <div class="links">
      <div v-if="user">
        <button @click="handleSubmit" type="submit" class="btn btn-primary">Log out</button>
        <div class="alert alert-danger mt-3" role="alert" v-if="error !== null"> {{ error }} </div>
      </div>
      <div v-else>
        <router-link v-if="!user" class="btn" :to="{ name: 'Signup' }">Signup</router-link>
        <router-link v-if="!user" class="btn" :to="{ name: 'Login' }">Log in</router-link>
      </div>
    </div>
  </div>
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
        router.push({ name: 'LoginForm'})
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