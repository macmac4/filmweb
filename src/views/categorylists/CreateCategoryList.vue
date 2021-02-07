<template>
  <section id="contact" class="contact section-bg">
    <div class="container">

      <div class="section-title">
        <h2 data-aos="fade-in">Create new category</h2>
        <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div class="row justify-content-center">

        <div class="col-lg-6 mt-4 mt-lg-0" v-if="statusSubmit == false">
          <form @submit.prevent="handleSubmit" class="php-email-form w-100">

            <div class="form-group mt-3">
              <input
                type="text"
                class="form-control"
                placeholder="category name"
                v-model="categoryTitle"
                required
              />
            </div>
            <div class="mb-3">
              <div class="alert alert-danger mt-3" role="alert" v-if="fileError !== null"> {{ fileError }} </div>
            </div>
            <div class="text-center">
              <button v-if="!isPending" type="submit" class="btn btn-primary">Create</button>
              <button v-else type="submit" class="btn btn-primary" disabled>Saving...</button>
            </div>
          </form>
        </div>
        <div class="col-lg-6 mt-4 mt-lg-0" v-else>
          <div class="mb-3">
              <div class="alert alert-success mt-3" role="alert"> Correctly created category </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
  
<script>
  import { ref } from 'vue'
  import useCollection from '@/composables/useCollection'
  import getUser from '@/composables/getUser'
  import { timestamp } from '@/firebase/config'

  export default {
    setup() {
      const { error, addDoc } = useCollection('categorylist')
      const { user } = getUser()

      const categoryTitle = ref('')
      const fileError = ref(null)
      const isPending = ref(false)
      const statusSubmit = ref(false)

      const handleSubmit = async () => {
        statusSubmit.value = false
        isPending.value = true

        await addDoc({
          title: categoryTitle.value,
          userId: user.value.uid,
          userName: user.value.displayName,
          createdAt: timestamp(),
        })
        isPending.value = false

        if (!error.value) {
          statusSubmit.value = true
          console.log('add category')
        }
      }

      return {
        categoryTitle,
        statusSubmit,
        handleSubmit,
        fileError,
        isPending,
      }
    }
  }
</script>