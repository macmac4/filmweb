<template>
  <main id="main">
    <!-- ======= Services Section ======= -->
    <section id="services" class="services section-bg" v-if="documents">
      <div class="container">

        <div class="section-title">
          <h2 data-aos="fade-in">Categories</h2>
          <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-right" v-for="doc in documents" :key="doc.id">
            <div class="card">
              <div class="card-img">
                <img :src="doc.coverUrl" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title"><a href="">{{ doc.title }}</a></h5>
                <!-- <p class="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p> -->
                <div class="read-more"><a href="#">Showe More</a></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Services Section -->

    <div class="alert alert-danger mt-3" role="alert" v-if="error !== null"> {{ error }} </div>
  </main>
</template>

<script>
import getCollection from "@/composables/getCollection"

export default {
  name: "ShowCategory",
  setup() {
    const { documents, error } = getCollection('categorylist');

    return {
      documents: documents,
      error: error,
    };
  },
};
</script>
