<template>
    <div>
      <div class="modal fade" id="modal-edit-vehicle" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Vehicle</h5>
              <button type="button" class="close" data-toggle="modal" data-target="#modal-edit-vehicle" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-vehicle">
                <form @submit.prevent="putVehicleOfAPerson(vehicleData)">
                  <div class="form-group">
                    <label>Vehicle Name</label>
                    <input v-model="vehicleData.vehicle" type="text" class="form-control" placeholder="Enter vehicle name">
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#modal-edit-vehicle">UPDATE VEHICLE</button>
                  </div>
                  <br>
                </form>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#modal-edit-vehicle">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'modal-form-edit-vehicle',
    data () {
      return {
      }
    },
    props: {
      vehicleData: [Object]
    },
    methods: {
      putVehicleOfAPerson: function (vehicleData) {
        this.$store.dispatch('vehicle/doPutVehicleOfAPerson', vehicleData)
      }
    }
  }
</script>

<style scoped>

</style>
