import axios from 'axios'

const doGetAllVehicleOfAPerson = ({commit}, personId) => {
  axios.get(
    '/api/person/' + personId + '/vehicle')
    .then(response => {
      commit('getAllVehicleOfAPerson', response.data)
    })
    .catch(error => {
      console.log('Error : ' + error)
    })
}

export default {
  doGetAllVehicleOfAPerson
}
