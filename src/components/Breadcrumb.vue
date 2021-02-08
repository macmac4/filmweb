<template>
  <!-- ======= Breadcrumbs Section ======= -->
    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Film Details</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li><router-link :to="{ name: 'FilmList' }">List Film</router-link></li>
            <li>Film Details</li>
          </ol>
        </div>

      </div>
    </section><!-- Breadcrumbs Section -->
</template>

<script>
export default {
  name: "Breadcrumb"
}
</script>