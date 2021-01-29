import { ref } from 'vue'
import { projectFirestore } from "../firebase/config"

const useFilm = (collection) => {
  const error = ref(null);

  const addFilm = async (dataFilm) => {
    error.value = null

    try {
      const res = await projectFirestore.collection(collection).add(dataFilm);
      console.log(res)
      return res

    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { error, addFilm };
};

export default useFilm