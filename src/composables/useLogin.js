import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)
const isPending = ref(false)

const login = async (email, password) => {
  error.value = null
  isPending = true

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    error.value = null
    isPending = false
    console.log(res)

    return res

  } catch (err) {
    error.value = err.message
    isPending = false
  }

} 

const useLogin = () => {
  return { error, login, isPending }
}

export default useLogin