import axios from 'axios'

const doGetAllPerson = ({commit}) => {
  axios.get(
    '/api/person')
    .then(response => {
      commit('getAllPerson', response.data)
    })
    .catch(error => {
      console.log('Error : ' + error)
    })
}

const doPostPerson = ({commit}, personData) => {
  axios.post(
    '/api/person', {
      name: personData.name,
      age: personData.age,
      address: personData.address
    }, {
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(response => {
      commit('postPerson', response.data)
    })
    .catch(error => {
      console.log('Error : ' + error)
    })
}

const doDeletePerson = ({commit}, personId) => {
  axios.delete(
    '/api/person/' + personId, {
    })
    .then(response => {
      commit('deletePerson', response.data)
    })
    .catch(error => {
      console.log('Error : ' + error)
    })
}

export default {
  doGetAllPerson,
  doPostPerson,
  doDeletePerson
}
