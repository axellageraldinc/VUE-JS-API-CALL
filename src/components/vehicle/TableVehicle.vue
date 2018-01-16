<template>
    <div>
      <table class="table table-striped">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="vehicle in vehicleList">
          <th scope="row">{{ vehicle.id }}</th>
          <td>{{ vehicle.vehicle }}</td>
          <td><button type="button" class="btn btn-primary">Edit</button></td>
          <td><button @click="deleteVehicleOfAPerson(personId, vehicle.id)" type="button" class="btn btn-primary">Delete</button></td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'table-vehicle',
    data () {
      return {
        vehicleData: {
          personId: 0,
          vehicleId: ''
        }
      }
    },
    props: {
      personId: Number
      // vehicleList: [Array]
    },
    computed: {
      ...mapGetters({
        vehicleList: 'vehicle/vehicleList'
      })
    },
    methods: {
      deleteVehicleOfAPerson: function (personId, vehicleId) {
        this.vehicleData = {
          personId: personId,
          vehicleId: vehicleId
        }
        this.$store.dispatch('vehicle/doDeleteVehicleOfAPerson', this.vehicleData)
      }
    }
  }
</script>

<style scoped>

</style>
