<template>
  <div class="container">
    <div class="row">
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Title</label>
          <input type="text" class="form-control" id="exampleInputEmail1" v-model="title">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Description</label>
          <input type="text" class="form-control" id="exampleInputPassword1" v-model="description">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

      <h2> {{ error }} </h2>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import useCollection from '../composables/useCollection'

export default {
  name: 'AddFilm',
  setup() {
    const { error, addDoc } = useCollection('films')
    const title = ref('')
    const description = ref('')

    const handleSubmit = async () => {
      const film = {
        title: title.value,
        description: description.value
      }

      await addDoc(film)
    }

    return {
      handleSubmit: handleSubmit,
      error: error,
      title: title,
      description: description,
    }
  }
}
</script>
