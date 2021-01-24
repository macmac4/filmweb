<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="film in films" :key="film.id">
      {{ film.title }} - {{ film.description }}
    </div>
  </div>

  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  <AddFilm />

</template>

<script>
import getFilms from "../composables/getFilms"
import AddFilm from "./AddFilm"

export default {
  name: "About",
  components: {
    AddFilm
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
