import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getCollection = () => {
  const collection = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFirestore.collection("films").get();
      // console.log(res.docs)

      collection.value = res.docs.map((film) => {
        return { ...film.data(), id: film.id };
      });
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { collection, error, load };
};

export default getCollection;
