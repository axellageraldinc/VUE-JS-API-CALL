import axios from 'axios'

const doGetAllVehicleOfAPerson = ({commit}, personId) => {
  axios.get(
    '/api/person/' + personId + '/vehicle')
    .then(response => {
      commit('getAllVehicleOfAPerson', response.data)
      console.log(JSON.stringify(response.data))
    })
    .catch(error => {
      console.log('Error : ' + error)
    })
}
const doPostVehicleOfAPerson = ({commit}, vehicleData) => {
  axios.post(
    '/api/person/' + vehicleData.personId + '/vehicle', {
      vehicle: vehicleData.vehicle
    })
    .then(response => {
      commit('postVehicleOfAPerson', response.data)
    })
    .catch(error => {
      console.log('Error : ' + error)
    })
}

export default {
  doGetAllVehicleOfAPerson,
  doPostVehicleOfAPerson
}
