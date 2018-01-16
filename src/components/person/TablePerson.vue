<template>
    <div>
      <div>
        <h4>List Person</h4>
        <table class="table table-striped">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Address</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            <th scope="col">Vehicle</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in personList" :key="item.id">
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.address }}</td>
            <td>
              <button @click="showModalEditPerson(item.id)" type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-form-edit-person">Edit</button>
            </td>
            <td>
              <button type="button" class="btn btn-primary" @click="deletePerson(item.id)">Delete</button>
            </td>
            <td>
              <button @click="showVehicleModal(item.id)" type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-vehicle">View Vehicle</button>
            </td>
          </tr>
          </tbody>
        </table>
        <nav aria-label="Page navigation example" v-if="totalPage >= 1">
          <ul class="pagination">
            <template v-if="firstPage === true">
              <li class="page-item disabled">
                <a class="page-link" @click="movePage(currentPage-1)">Previous</a>
              </li>
            </template>
            <template v-else>
              <li class="page-item">
                <a class="page-link" @click="movePage(currentPage-1)">Previous</a>
              </li>
            </template>
            <template v-for="page in totalPage">
              <template v-if="page === currentPage">
                <li class="page-item active">
                  <a class="page-link" @click="movePage(page)">{{ page }}</a>
                </li>
              </template>
              <template v-else>
                <li class="page-item">
                  <a class="page-link" @click="movePage(page)">{{ page }}</a>
                </li>
              </template>
            </template>
            <template v-if="lastPage === true">
              <li class="page-item disabled">
                <a class="page-link" @click="movePage(currentPage+1)">Next</a>
              </li>
            </template>
            <template v-else>
              <li class="page-item">
                <a class="page-link" @click="movePage(currentPage+1)">Next</a>
              </li>
            </template>
          </ul>
        </nav>
      </div>
      <ModalFormEditPerson v-bind:person="person"/>
      <ModalVehicle v-bind:personId="clickedPersonId" v-bind:vehicleList="vehicleList"/>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ModalFormEditPerson from '@/components/person/ModalFormEditPerson'
  import ModalVehicle from '@/components/vehicle/ModalVehicle'
  import axios from 'axios'

  export default {
    name: 'table-person',
    data () {
      return {
        name: '',
        person: {
          id: 0,
          name: '',
          age: 0,
          address: ''
        },
        clickedPersonId: 0,
        vehicleList: [{
          id: 0,
          vehicle: ''
        }]
      }
    },
    components: {
      ModalFormEditPerson,
      ModalVehicle
    },
    computed: {
      ...mapGetters({
        personList: 'person/personList',
        totalPage: 'person/totalPage',
        currentPage: 'person/currentPage',
        firstPage: 'person/firstPage',
        lastPage: 'person/lastPage'
      })
    },
    created () {
      // default pageNumber adalah 2, karena di JSON itu kalau pageNumber 1, maka number = 0.
      // makannya dibuat default pageNumber itu 2 supaya ketahuan number currentPage adalah 1 (page awal)
      this.getCurrentPage(2)
      this.getFirstPage(1)
      this.getLastPage(1)
    },
    mounted () {
      this.getAllPerson()
    },
    methods: {
      getAllPerson: function () {
        this.$store.dispatch('person/doGetAllPerson')
        this.$store.dispatch('person/doGetTotalPage')
      },
      deletePerson: function (personId) {
        this.$store.dispatch('person/doDeletePerson', personId)
      },
      showModalEditPerson: function (personId) {
        axios.get(
          '/api/person/' + personId)
          .then(response => {
            this.person = response.data
            console.log(JSON.stringify(response.data))
          })
          .catch(error => {
            console.log('Error : ' + error)
          })
        // this.$store.dispatch('person/doGetOnePerson', personId)
      },
      showVehicleModal: function (personId) {
        this.clickedPersonId = personId
        axios.get(
          '/api/person/' + personId + '/vehicle')
          .then(response => {
            this.vehicleList = response.data
          })
          .catch(error => {
            console.log('Error : ' + error)
          })
      },
      movePage: function (pageNumber) {
        this.$store.dispatch('person/doMovePage', pageNumber)
        this.$store.dispatch('person/doGetCurrentPage', pageNumber + 1)
        this.$store.dispatch('person/doGetFirstPage', pageNumber)
        this.$store.dispatch('person/doGetLastPage', pageNumber)
      },
      getCurrentPage: function (pageNumber) {
        this.$store.dispatch('person/doGetCurrentPage', pageNumber)
      },
      getFirstPage: function (pageNumber) {
        this.$store.dispatch('person/doGetFirstPage', pageNumber)
      },
      getLastPage: function (pageNumber) {
        this.$store.dispatch('person/doGetLastPage', pageNumber)
      }
    }
  }
</script>

<style scoped>

</style>
