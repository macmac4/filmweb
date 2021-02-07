<template>
  <section id="contact" class="contact section-bg">
    <div class="container">

      <div class="section-title">
        <h2 data-aos="fade-in">Create new film</h2>
        <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div class="row justify-content-center">

        <div class="col-lg-6 mt-4 mt-lg-0" v-if="statusSubmit == false">
          <form @submit.prevent="handleSubmit">
            <div class="form-group mt-3">
              <input
                type="text"
                class="form-control"
                placeholder="title"
                v-model="filmTitle"
                required
              />
            </div>
            <div class="form-group mt-3">
              <textarea
                class="form-control"
                placeholder="description"
                v-model="filmDescription"
                required
              ></textarea>
            </div>
            <div class="form-group mt-3">
              <input
                type="text"
                class="form-control"
                placeholder="link to film"
                v-model="filmLink"
                required
              />
            </div>
            <div class="form-group mt-3">
              <select
                class="form-control"
                aria-label=".form-select-lg example"
                v-model="filmCategory"
                required
              >
                <option :value="null">choose category</option>
                <option v-for="doc in documents" :key="doc.id" :value="doc.title">{{ doc.title }}</option>
              </select>
            </div>

            <div class="form-group mt-3">
              <input
                type="file"
                class="form-control"
                @change="handleChange"
              />
            </div>
            <div class="form-check mt-3">
              <input class="form-check-input" type="checkbox" v-model="filmFirstPage" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                First Page
              </label>
            </div>
            <div class="mb-3 mt-3">
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
              <div class="alert alert-success mt-3" role="alert"> Correctly created film </div>
          </div>
        </div>


      </div>
    </div>
  </section>
</template>

<script>
  import { ref } from 'vue'
  import useStorage from '@/composables/useStorage'
  import useCollection from '@/composables/useCollection'
  import getCollection from "@/composables/getCollection"
  import getUser from '@/composables/getUser'
  import { timestamp } from '@/firebase/config'

  export default {
    setup() {
      const { uploadImage, url, filePath } = useStorage()
      const { error, addDoc } = useCollection('filmlist')
      const { user } = getUser()
      const { documents } = getCollection('categorylist');
      console.log(documents)


      const filmTitle = ref('')
      const filmDescription = ref('')
      const filmLink = ref('')
      const filmCategory = ref(null)
      const filmFirstPage = ref('')
      const file = ref(null)
      const fileError = ref(null)
      const isPending = ref(false)
      const statusSubmit = ref(false)

      const handleSubmit = async () => {
        if (file.value) {
          isPending.value = true
          statusSubmit.value = false

          await uploadImage(file.value)
          await addDoc({
            title: filmTitle.value,
            description: filmDescription.value,
            link: filmLink.value,
            category: filmCategory.value,
            firstpage: filmFirstPage.value,
            userId: user.value.uid,
            userName: user.value.displayName,
            coverUrl: url.value,
            filePath: filePath.value,
            createdAt: timestamp(),
          })
          isPending.value = false

          if (!error.value) {
            statusSubmit.value = true
            console.log('add film')
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
        filmTitle,
        filmDescription,
        filmLink,
        filmCategory,
        filmFirstPage,
        statusSubmit,
        documents,
        handleSubmit,
        handleChange,
        fileError,
        isPending,
      }
    }
  }
</script>
