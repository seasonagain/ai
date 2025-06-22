<template>
<Navbar />
<router-view />
</template>
<script>
import Navbar from './components/NavBar.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


export default {
  
  components: {
    Navbar
  }
}
</script>
<style>

</style>
