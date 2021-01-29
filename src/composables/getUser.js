import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const user = ref(null)

projectAuth.onAuthStateChanged( _user => {
  user.value = _user
})

const getUser = () => {
  return { user }
}

export default getUser