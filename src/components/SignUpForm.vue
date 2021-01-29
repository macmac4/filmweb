<template>
  <form @submit.prevent="handleSubmit" class="form-signup">
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="floatingName"
        placeholder="display name"
        v-model="displayName"
      />
      <label for="floatingName">Display name</label>
    </div>
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
    <button type="submit" class="btn btn-primary">Sign up</button>
    <div class="alert alert-danger mt-3" role="alert" v-if="error !== null"> {{ error }} </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'

export default {
  name: "SignUpForm",
  setup() {
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const { error, signup } = useSignup()

    const handleSubmit = async () => {
      await signup(displayName.value, email.value, password.value)
    }

    return {
      error: error,
      displayName: displayName,
      email: email,
      password: password,
      handleSubmit: handleSubmit,
    }
  }
};
</script>