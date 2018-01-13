const getAllPerson = (state, response) => {
  state.personList = response
}
const postPerson = (state, response) => {
  state.personList.push(response)
}
const deletePerson = (state, response) => {
  let index = state.personList.findIndex(obj => obj.id === response)
  state.personList.splice(index, 1)
}
const getOnePerson = (state, response) => {
  state.person = response
}
const putPerson = (state, response) => {
  // state.personList.splice(state.personList.indexOf(response), 1)
  // state.personList.push(response)
}

const getTotalPage = (state, response) => {
  state.totalPage = response
}
const getCurrentPage = (state, response) => {
  state.currentPage = response
}
const getFirstPage = (state, response) => {
  state.firstPage = response
}
const getLastPage = (state, response) => {
  state.lastPage = response
}

export default {
  getAllPerson,
  postPerson,
  deletePerson,
  getOnePerson,
  putPerson,
  getTotalPage,
  getCurrentPage,
  getFirstPage,
  getLastPage
}
