<template>
    <div>
        <b-list-group>
            <b-list-group-item class="d-flex justify-content-between align-items-center"
            v-for="(item,index) of ordenandoArray" :key="index"
            @click="aumentar(index)">
            <!-- <b-btn class="btn btn-xs btn-success" @click="aumentar(index)">+</b-btn> -->
               {{index}} | {{item.name}}
                <b-badge variant="primary" pill>{{item.power}}</b-badge>
            </b-list-group-item>
        </b-list-group>

        <b-btn class="btn btn-danger btn-block mt-3" @click="resetear(index)">Reset</b-btn>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    name: 'Lista',

    computed:{
        ...mapState(['personas']),
        ordenandoArray(){
            return this.personas.sort( (a,b)=> b.power - a.power)
        // En sort (funcion nativa de js) fijamos los puntos de comparacion(generalmente es a y b )
        // y en este caso ordenara de menor a mayor
        }
    
    },
    methods: {
        ...mapMutations(['aumentar','resetear'])
    },

}
</script>