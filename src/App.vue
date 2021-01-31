<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './views/Footer'

export default {
  components: { Navbar, Footer }
}
</script>