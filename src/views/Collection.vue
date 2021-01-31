<template>
  <MetricFilm />

  
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="film in films" :key="film.id">
      {{ film.title }} - {{ film.description }}
    </div>
  </div>

  <AddFilm />

</template>

<script>
import getFilms from "../composables/getFilms"
import MetricFilm from "../components/MetricFilm"
import AddFilm from "./AddFilm"

export default {
  name: "Collection",
  components: {
    AddFilm, 
    MetricFilm
  },
  setup() {
    const { films, error, load } = getFilms();
    load();

    return {
      films: films,
      error: error,
    };
  },
};
</script>
