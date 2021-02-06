<template>

  <ListFilm />

  <MetricFilm />

  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="film in collection" :key="film.id">
      {{ film.title }} - {{ film.description }}
    </div>
  </div>

  <AddFilm />

</template>

<script>
import getCollection from "../composables/getCollection"
import ListFilm from "../components/ListFilm"
import MetricFilm from "../components/MetricFilm"
import AddFilm from "./AddFilm"

export default {
  name: "Collection",
  components: {
    AddFilm, 
    MetricFilm,
    ListFilm
  },
  setup() {
    const { collection, error, load } = getCollection();
    load();

    return {
      collection: collection,
      error: error,
    };
  },
};
</script>
