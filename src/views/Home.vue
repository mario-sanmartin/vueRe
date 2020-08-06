<template>
  <div class="container">
    <Cabeza />
    <blackList />
  </div>
</template>

<script>
// @ is an alias to /src
import blackList from '@/components/Lista.vue'
import Cabeza from '@/components/Cabecera.vue'


export default {
  name: 'Home',
  components: {
   Cabeza,
   blackList
  }
}
</script>
