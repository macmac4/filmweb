import { ref } from 'vue'
import { projectFirestore } from "../firebase/config"

const useCollection = (collection) => {
  const error = ref(null)
  const isPending = ref(false)

  const addDoc = async (doc) => {
    error.value = null
    isPending.value = true

    console.log(doc)

    try {
      const res = await projectFirestore.collection(collection).add(doc);
      isPending.value = false

      console.log(res)
      return res

    } catch (err) {
      error.value = err.message;
      isPending.value = false
  
      console.log(error.value);
    }
  };

  return { error, addDoc, isPending };
};

export default useCollection