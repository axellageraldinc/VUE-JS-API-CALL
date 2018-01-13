import axios from 'axios'

const doGetAllPerson = ({commit}) => {
  axios.get(
    '/api/person')
    .then(response => {
      console.log(JSON.stringify(response.data))
      commit('getAllPerson', response.data.content)
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

const doGetOnePerson = ({commit}, personId) => {
  axios.get(
    '/api/person/' + personId)
    .then(response => {
      commit('getOnePerson', response.data)
    })
    .catch(error => {
      console.log('Error : ' + error)
    })
}

const doPutPerson = ({commit}, personData) => {
  axios.put('/api/person/' + personData.id, {
    name: personData.name,
    age: personData.age,
    address: personData.address
  }, {
    headers: {
      'Content-type': 'application/json'
    }
  })
    .then(response => {
      commit('putPerson', response.data)
    })
    .catch(error => {
      console.log('Error : ' + error)
    })
}

const doGetTotalPage = ({commit}) => {
  axios.get(
    '/api/person')
    .then(response => {
      console.log(JSON.stringify(response.data.totalPages))
      commit('getTotalPage', response.data.totalPages)
    })
    .catch(error => {
      console.log('Error : ' + error)
    })
}

const doMovePage = ({commit}, pageNumber) => {
  axios.get(
    '/api/person?page=' + pageNumber)
    .then(response => {
      commit('getAllPerson', response.data.content)
    })
    .catch(error => {
      console.log('Error : ' + error)
    })
}

const doGetCurrentPage = ({commit}, pageNumber) => {
  axios.get(
    '/api/person?page=' + pageNumber)
    .then(response => {
      commit('getCurrentPage', response.data.number)
    })
    .catch(error => {
      console.log('Error : ' + error)
    })
}

const doGetFirstPage = ({commit}, pageNumber) => {
  axios.get(
    '/api/person?page=' + pageNumber)
    .then(response => {
      commit('getFirstPage', response.data.first)
    })
    .catch(error => {
      console.log('Error : ' + error)
    })
}

const doGetLastPage = ({commit}, pageNumber) => {
  axios.get(
    '/api/person?page=' + pageNumber)
    .then(response => {
      commit('getLastPage', response.data.last)
    })
    .catch(error => {
      console.log('Error : ' + error)
    })
}

export default {
  doGetAllPerson,
  doPostPerson,
  doDeletePerson,
  doGetOnePerson,
  doPutPerson,
  doGetTotalPage,
  doMovePage,
  doGetCurrentPage,
  doGetFirstPage,
  doGetLastPage
}
