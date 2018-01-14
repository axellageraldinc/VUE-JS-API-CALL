import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  personList: [],
  person: {},
  totalPage: 0,
  currentPage: 0,
  firstPage: '',
  lastPage: ''
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
