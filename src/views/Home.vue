<template>
  <section id="hero">

    <div class="container">
      <div class="row d-flex align-items-center">
        <div class=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1" data-aos="fade-right">
          <h1>This is the largest and the most visited film website.</h1>
          <h2>The largest database of movies, series and actor, cinema and TV repertoire, premieres, news ...</h2>
          <!-- <a href="#about" class="btn-get-started scrollto">Get Started</a> -->
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
          <img src="@/assets/images/movienight.png" class="img-fluid" alt="">
        </div>

      </div>
    </div>

  </section>


  <main id="main">
    <section id="services" class="services section-bg" v-if="documents">
      <div class="container">

        <div class="section-title">
          <h2 data-aos="fade-in">Special films</h2>
          <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <ListFilm :films="documents" />
        </div>

      </div>
    </section>

    <div class="alert alert-danger mt-3" role="alert" v-if="error !== null"> {{ error }} </div>
  </main>
</template>

<script>
import getCollection from "@/composables/getCollection"
import ListFilm from "@/components/ListFilm"

export default {
  name: "Home",
  components: {
    ListFilm
  },
  setup() {
    const { documents, error } = getCollection(
      'filmlist',
      ['firstpage', '==', true]
    );

    return {
      documents: documents,
      error: error,
    }
  }
};
</script>
