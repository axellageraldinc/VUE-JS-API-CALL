<template>
    <div>
      <div class="form-vehicle">
        <form @submit.prevent="postVehicleOfAPerson">
          <div class="form-group">
            <label>Vehicle Name</label>
            <input v-model="vehicleData.vehicle" type="text" class="form-control" placeholder="Enter vehicle name">
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">ADD NEW VEHICLE</button>
          </div>
          <br>
        </form>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'form-vehicle',
    data () {
      return {
        vehicleData: {
          personId: 0,
          vehicle: ''
        }
      }
    },
    props: {
      personId: Number
    },
    methods: {
      postVehicleOfAPerson: function () {
        this.vehicleData.personId = this.personId
        this.$store.dispatch('vehicle/doPostVehicleOfAPerson', this.vehicleData)
        this.vehicleData = {
          personId: 0,
          vehicle: ''
        }
      }
    }
  }
</script>

<style scoped>
  .form-vehicle .form-group {
    text-align: left;
  }
</style>
