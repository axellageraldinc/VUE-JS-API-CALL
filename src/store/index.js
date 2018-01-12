import Vue from 'vue'
import Vuex from 'vuex'
import personModule from './modules/person/index'
import vehicleModule from './modules/vehicle/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    person: personModule,
    vehicle: vehicleModule
  }
})

export default store
