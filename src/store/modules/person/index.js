import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  personList: [],
  // personInput dibuat object beserta isinya begini supaya gak error di bagian FormPerson computed personInput
  person: {
    name: '',
    age: '',
    address: ''
  },
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
