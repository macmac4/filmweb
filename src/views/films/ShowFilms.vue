<template>
  <main id="main">
    <!-- ======= Services Section ======= -->
    <section id="services" class="services section-bg" v-if="documents">
      <div class="container">

        <div class="section-title">
          <h2 data-aos="fade-in">List Films</h2>
          <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <ListFilm :films="documents" />
        </div>

      </div>
    </section><!-- End Services Section -->

    <div class="alert alert-danger mt-3" role="alert" v-if="error !== null"> {{ error }} </div>
  </main>
</template>

<script>
import getCollection from "@/composables/getCollection"
import ListFilm from "@/components/ListFilm"

export default {
  name: "ShowFilms",
  components: {
    ListFilm
  },
  setup() {
    const { documents, error } = getCollection(
      'filmlist',
      ['firstpage', '==', true]
    );

    console.log(documents)

    return {
      documents: documents,
      error: error,
    };
  },
};
</script>