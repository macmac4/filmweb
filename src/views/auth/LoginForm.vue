<template>


  <section id="contact" class="contact section-bg">
      <div class="container">

        <div class="section-title">
          <h2 data-aos="fade-in">Login</h2>
          <!-- <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> -->
        </div>

        <div class="row justify-content-center">

          <div class="col-lg-6 mt-4 mt-lg-0" v-if="statusSubmit == false">
            <form @submit.prevent="handleSubmit" class="php-email-form w-100">

              <div class="form-group mt-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  v-model="email"
                />
              </div>
              <div class="form-group mt-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  v-model="password"
                />
              </div>
              <div class="mb-3">
                <div class="alert alert-danger mt-3" role="alert" v-if="error !== null"> {{ error }} </div>
              </div>
              <div class="text-center">
                <button v-if="!isPending" type="submit" class="btn btn-primary">Log in</button>
                <button v-if="isPending" type="submit" class="btn btn-primary" disabled>Loading</button>
              </div>
            </form>
          </div>
          <div class="col-lg-6 mt-4 mt-lg-0" v-else>
            <div class="mb-3">
                <div class="alert alert-success mt-3" role="alert"> 
                  <p>You are log in</p> 
                  <router-link class="btn btn-success" :to="{ name: 'FilmList' }">
                    Go to films collection
                  </router-link>
                </div>
            </div>
          </div>

        </div>
    </div>
  </section>

</template>

<script>
import { ref } from 'vue'
import useLogin from '@/composables/useLogin'

export default {
  name: "LoginForm",
  setup() {
    const email = ref('')
    const password = ref('')
    const { error, login, isPending } = useLogin()
    const statusSubmit = ref(false)

    const handleSubmit = async () => {
      statusSubmit.value = false
      await login(email.value, password.value)

      if (!error.value) {
        statusSubmit.value = true
        console.log('login')
      }
    }

    return {
      error,
      email,
      password,
      handleSubmit,
      isPending,
      statusSubmit,
    }
  }
};
</script>