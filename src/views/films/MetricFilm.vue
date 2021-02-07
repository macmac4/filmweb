<template>
   <main id="main">

    <Breadcrumb />

    <!-- ======= Portfolio Details Section ======= -->
    <section class="portfolio-details">
      <div class="alert alert-danger mt-3" role="alert" v-if="error"> {{ error }} </div>

      <div class="container" v-if="film">

        <div class="portfolio-details-container">

          <div class="owl-carousel portfolio-details-carousel row">
            <div class="col-8">
              <iframe width="100%" height="460" 
                src="https://www.youtube.com/embed/s7EdQ4FqbhY">
              </iframe>
            </div>
            <div class="col-4 text-right">
              <img :src="film.coverUrl" class="img-fluid" alt="">
            </div>
          </div>

          <div class="portfolio-info">
            <h3>Film information</h3>
            <ul>
              <li><strong>Title</strong>: {{ film.title }}</li>
              <li><strong>Category</strong>: {{ film.category }}</li>
              <li><strong>Project date</strong>: {{ film.createdAt.toDate() }}</li>
              <li><strong>Added by</strong>: {{ film.userName }}</li>
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

export default {
  name: "MetricFilm",
  components: {
    Breadcrumb
  },
  props: [ 'id' ],
  setup(props) {
    const { error, document } = getDocument('filmlist', props.id)

    return { 
      error, 
      film: document 
    }
  }
}
</script>