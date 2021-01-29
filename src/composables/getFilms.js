import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getFilms = () => {
  const films = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFirestore.collection("films").get();
      // console.log(res.docs)

      films.value = res.docs.map((film) => {
        return { ...film.data(), id: film.id };
      });
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { films, error, load };
};

export default getFilms;
