import { ref } from 'vue'
import { projectFirestore } from "../firebase/config"

const useFilm = (collection) => {
  const error = ref(null)
  const isPending = ref(false)

  const addFilm = async (dataFilm) => {
    error.value = null
    isPending.value = true

    try {
      const res = await projectFirestore.collection(collection).add(dataFilm);
      isPending.value = false

      console.log(res)
      return res

    } catch (err) {
      error.value = err.message;
      isPending.value = false
  
      console.log(error.value);
    }
  };

  return { error, addFilm, isPending };
};

export default useFilm