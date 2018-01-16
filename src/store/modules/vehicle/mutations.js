const getAllVehicleOfAPerson = (state, response) => {
  state.vehicleList = response
}
const postVehicleOfAPerson = (state, response) => {
  state.vehicleList.unshift(response)
}

export default {
  getAllVehicleOfAPerson,
  postVehicleOfAPerson
}
