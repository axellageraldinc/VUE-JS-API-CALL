const getAllVehicleOfAPerson = (state, response) => {
  state.vehicleList = response
}
const postVehicleOfAPerson = (state, response) => {
  state.vehicleList.unshift(response)
}
const deleteVehicleOfAPerson = (state, response) => {
  let index = state.vehicleList.findIndex(obj => obj.id === response)
  state.vehicleList.splice(index, 1)
}

export default {
  getAllVehicleOfAPerson,
  postVehicleOfAPerson,
  deleteVehicleOfAPerson
}
