import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personas: 
      [
        {name:'Batu',profession:'Programador',power: 6},
        {name:'Maye',profession:'Ingeniero Informatico',power: 5},
        {name:'Epica',profession:'Ingeniero Informatico',power: 6},
        {name:'Mario', profession:'Prograamdor y Analista',power: 2}
      ],
      arrayFotos: [1,2,3,4,5,6,]
    
  },
  mutations: {
    aumentar(state,index){
      state.personas[index].power ++
    },
    resetear(state){
      state.personas.forEach(challita =>{
        challita.power = 0
      })
    }

  },
  actions: {
  },
  modules: {
  }
})
