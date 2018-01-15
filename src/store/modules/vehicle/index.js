import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  vehicleList: []
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
