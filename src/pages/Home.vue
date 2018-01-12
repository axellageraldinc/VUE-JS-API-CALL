<template>
  <div class="home">
    <h3>Spring Boot + Vue JS</h3><br>
    <div class="form-group">
      <label>Name</label>
      <input v-model="person.name" type="text" class="form-control" placeholder="Enter name">
    </div>
    <div class="form-group">
      <label>Age</label>
      <input v-model="person.age" type="text" class="form-control" placeholder="Enter Age">
    </div>
    <div class="form-group">
      <label>Address</label>
      <input v-model="person.address" type="text" class="form-control" placeholder="Enter Address">
    </div>
    <br>
    <div class="form-group">
      <button @click="postPerson" type="submit" class="btn btn-primary">SUBMIT</button>
    </div>
    <br>
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
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in personList" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.address }}</td>
          <td></td>
          <td><a href="#" @click="deletePerson(item.id)">Delete</a></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
      name: 'home',
      data () {
        return {
          person: {}
        }
      },
      mounted () {
        this.getAllPerson()
      },
      computed: {
        ...mapGetters({
          personList: 'person/personList'
        })
        // personList: function () {
        //   return this.$store.getters['person/personList']
        // }
      },
      methods: {
        // ...mapActions([
        //   'person/doGetAllPerson',
        //   'person/doPostPerson',
        //   'person/doDeletePerson'
        // ])
        getAllPerson: function () {
          this.$store.dispatch('person/doGetAllPerson')
        },
        postPerson: function () {
          this.$store.dispatch('person/doPostPerson', this.person)
        },
        deletePerson: function (personId) {
          this.$store.dispatch('person/doDeletePerson', personId)
        }
      }
    }
</script>

<style scoped>
  .home{
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  .home .form-group {
    text-align: left;
  }
  .home label {
    font-weight: 600;
  }
  .home button {
    width: 100%;
  }
</style>
