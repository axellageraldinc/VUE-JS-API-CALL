<template>
    <div>
      <div class="form-vehicle">
        <form>
          <div class="form-group">
            <label>Vehicle Name</label>
            <input v-model="vehicle.vehicle" type="text" class="form-control" placeholder="Enter vehicle name">
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
  import { mapGetters } from 'vuex'

  export default {
    name: 'form-vehicle',
    data () {
      return {
        vehicle: {
          id: '',
          vehicle: ''
        }
      }
    },
    computed: {
      ...mapGetters({
      })
    },
    methods: {
      postVehicleOfAPerson: function (personData) {
        console.log(personData)
        this.$store.dispatch('vehicle/doPostVehicleOfAPerson', personData, this.vehicle)
      }
    }
  }
</script>

<style scoped>
  .form-vehicle .form-group {
    text-align: left;
  }
</style>
