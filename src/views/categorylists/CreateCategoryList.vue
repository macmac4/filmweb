<template>
  <section id="contact" class="contact section-bg">
    <div class="container">

      <div class="section-title">
        <h2 data-aos="fade-in">Create new category</h2>
        <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div class="row justify-content-center">

        <div class="col-lg-6 mt-4 mt-lg-0">
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
            <div class="form-group mt-3">
              <input
                type="file"
                class="form-control"
                @change="handleChange"
              />
            </div>
            <div class="mb-3">
              <div class="alert alert-danger mt-3" role="alert" v-if="fileError !== null"> {{ fileError }} </div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">Create</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>
  
<script>
  import { ref } from 'vue'
  import useStorage from '@/composables/useStorage'
  import useCollection from '@/composables/useCollection'
  import getUser from '@/composables/getUser'
  import { timestamp } from '@/firebase/config'

  export default {
    setup() {
      const { uploadImage, url, filePath } = useStorage()
      const { error, addDoc } = useCollection('categorylist')
      const { user } = getUser()

      const categoryTitle = ref('')
      const file = ref(null)
      const fileError = ref(null)

      const handleSubmit = async () => {
        if (file.value) {
          await uploadImage(file.value)
          await addDoc({
            title: categoryTitle.value,
            userId: user.value.uid,
            userName: user.value.displayName,
            coverUrl: url.value,
            filePath: filePath.value,
            film: [],
            createdAt: timestamp(),
          })

          if (!error.value) {
            console.log('add category')
          }
        }
      }

      const types = ['image/png', 'image/jpeg', 'image/jpg']

      const handleChange = (e) => {
        console.log(e.target.files)
        const selected = e.target.files[0]

        if (selected && types.includes(selected.type)) {
          file.value = selected
          fileError.value = null
        } else {
          file.value = null
          fileError.value = 'Wrond type of file. Please type (png or jpeg)'
        }
      }

      return {
        categoryTitle,
        handleSubmit,
        handleChange,
        fileError,
      }
    }
  }
</script>