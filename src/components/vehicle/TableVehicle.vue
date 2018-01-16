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
          <td><button @click="showEditVehicleModal(vehicle.id)" type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-edit-vehicle">Edit</button></td>
          <td><button @click="deleteVehicleOfAPerson(personId, vehicle.id)" type="button" class="btn btn-primary">Delete</button></td>
        </tr>
        </tbody>
      </table>
      <ModalFormEditVehicle v-bind:vehicleData="vehicleData"/>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ModalFormEditVehicle from '@/components/vehicle/ModalFormEditVehicle'
  import axios from 'axios'

  export default {
    name: 'table-vehicle',
    components: {
      ModalFormEditVehicle
    },
    data () {
      return {
        vehicleData: {
          personId: 0,
          vehicleId: '',
          vehicle: ''
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
      },
      showEditVehicleModal: function (vehicleId) {
        axios.get(
          '/api/person/' + this.personId + '/vehicle/' + vehicleId)
          .then(response => {
            this.vehicleData = {
              personId: this.personId,
              vehicleId: vehicleId,
              vehicle: response.data.vehicle
            }
          })
          .catch(error => {
            console.log('Error : ' + error)
          })
      }
    }
  }
</script>

<style scoped>

</style>
