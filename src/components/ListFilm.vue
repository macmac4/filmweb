<template>

  <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-right" v-for="film in films" :key="film.id">
    <div class="card">
      <div class="card-img">
        <img :src="film.coverUrl" alt="">
      </div>
      <div class="card-body">
        <h5 class="card-title">
          <router-link :to="{ name: 'FilmMetric', params: { id: film.id }}">{{ film.title }}</router-link>
        </h5>
        <p class="card-text">{{ film.description }}</p>
        <div class="read-more">
          <router-link :to="{ name: 'FilmMetric', params: { id: film.id }}">
            <i class="icofont-arrow-right"></i> Show More
          </router-link>
        </div>
      </div>
    </div>
  </div>
          
</template>

<script>
export default {
  name: 'ListFilm',
  props: ['films']
}
</script>