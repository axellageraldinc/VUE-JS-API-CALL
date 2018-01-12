const getAllPerson = (state, response) => {
  state.personList = response
}
const postPerson = (state, response) => {
  state.personList.push(response)
}
const deletePerson = (state, response) => {
  var personList = state.personList
  personList.splice(personList.indexOf(response), 1)
}

export default {
  getAllPerson,
  postPerson,
  deletePerson
}
