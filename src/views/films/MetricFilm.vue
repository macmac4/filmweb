<template>
   <main id="main">

    <Breadcrumb />
    <section class="breadcrumbs ownership" v-if="ownership">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>User logged section</h2>
          <ol>
            <li><router-link to="/film/create" class="btn btn-warning">Create film</router-link></li>
            <li><router-link to="/category/create" class="btn btn-warning">Create category</router-link></li>
            <li><button type="submit" class="btn btn-danger" @click="handleDelete">Delete film</button></li>
          </ol>
        </div>

      </div>
    </section>

    <!-- ======= Portfolio Details Section ======= -->
    <section class="portfolio-details">
      <div class="alert alert-danger mt-3" role="alert" v-if="error"> {{ error }} </div>

      <div class="container" v-if="film">

        <div class="portfolio-details-container">
          <div class="owl-carousel portfolio-details-carousel row">
            <div class="col-md-8 col-sm-12">
              <iframe width="100%" height="460" 
                :src="film.link">
              </iframe>
            </div>
            <div class="col-md-4 col-sm-12 text-right">
              <img :src="film.coverUrl" class="img-fluid" alt="">
            </div>
          </div>

          <div class="portfolio-info">
            <h3>Film information</h3>
            <ul>
              <li><strong>Title</strong>: {{ film.title }}</li>
              <li><strong>Category</strong>: {{ film.category }}</li>
              <li><strong>Project date</strong>: {{ film.createdAt.toDate() }}</li>
              <li><strong>Created by</strong>: {{ film.userName }}</li>
            </ul>
          </div>

        </div>

        <div class="portfolio-description">
          <h2>{{ film.title }}</h2>
          <p>
            {{ film.description }}
          </p>
        </div>
      </div>

    </section><!-- End Portfolio Details Section -->

  </main><!-- End #main -->
</template>

<script>
import getDocument from "@/composables/getDocument"
import Breadcrumb from "@/components/Breadcrumb"
import getUser from "@/composables/getUser"
import useDocument from "@/composables/useDocument"
import useStorage from "@/composables/useStorage"
import { computed } from 'vue'

export default {
  name: "MetricFilm",
  components: {
    Breadcrumb
  },
  props: [ 'id' ],
  setup(props) {
    const { error, document: film } = getDocument('filmlist', props.id)
    const { user } = getUser()
    const { deleteDoc } = useDocument('filmlist', props.id)
    const { deleteImage } = useStorage()

    const ownership = computed(() => {
      return film.value && user.value && user.value.uid == film.value.userId
    })

    const handleDelete = async () => {
      await deleteImage(film.value.filePath)
      await deleteDoc()
      film.value = null
    }

    return { 
      error, 
      film,
      ownership,
      handleDelete
    }
  }
}
</script>