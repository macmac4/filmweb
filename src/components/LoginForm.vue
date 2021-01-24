<template>
  <form @submit.prevent="handleSubmit" class="form-login">
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        v-model="email"
      />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
        v-model="password"
      />
      <label for="floatingPassword">Password</label>
    </div>
    <button type="submit" class="btn btn-primary">Log in</button>
    <div class="alert alert-danger mt-3" role="alert" v-if="error !== null"> {{ error }} </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'

export default {
  name: "LoginForm",
  setup() {
    const email = ref('')
    const password = ref('')
    const { error, login } = useLogin()

    const handleSubmit = async () => {
      await login(email.value, password.value)
      if (!error.value) {
        console.log('login')
      }
    }

    return {
      error: error,
      email: email,
      password: password,
      handleSubmit: handleSubmit,
    }
  }
};
</script>