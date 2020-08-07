<template>
    <div>
        <h1>Galeria de Fotografias</h1>

        <router-link :to="{name: 'Fotos',params:{id: item}}" 
        v-for="(item,index) of arrayFotos" :key="index">
            <b-button>Foto {{item}}</b-button>
        </router-link>
        <Foto />
        <b-button @click="homie">Home</b-button>
        <b-button @click="anterior">Anterior</b-button>
        <b-button @click="siguiente">Siguiente</b-button>
    </div>
</template>

<script>
import Foto  from '@/components/Fotografia.vue';
import {mapState,mapMutations} from 'vuex'
export default {
    components:{
        Foto
    },
    computed: {
        ...mapState(['arrayFotos'])
    },
    methods: {
      homie(){
      this.$router.push('/');
      },
      anterior(){
        this.$router.go(-1);
      },
      siguiente(){
        this.$router.go(1);
      }
   }
}
</script>