<template>
   <main id="main">

    <Breadcrumb />

    <!-- ======= Portfolio Details Section ======= -->
    <section class="portfolio-details">
      <div class="alert alert-danger mt-3" role="alert" v-if="error"> {{ error }} </div>

      <div class="container" v-if="document">

        <div class="portfolio-details-container">

          <div class="owl-carousel portfolio-details-carousel">
            <img :src="document.coverUrl" class="img-fluid" alt="">
          </div>

          <div class="portfolio-info">
            <h3>Project information</h3>
            <ul>
              <li><strong>Title</strong>: {{ document.title }}</li>
              <li><strong>Category</strong>: {{ document.category }}</li>
              <li><strong>Project date</strong>: 01 March, 2020</li>
              <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
            </ul>
          </div>

        </div>

        <div class="portfolio-description">
          <h2>This is an example of portfolio detail</h2>
          <p>
            Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
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
    console.log(document)

    return { error, document }
  }
}
</script>