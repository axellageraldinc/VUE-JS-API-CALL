<template>
  <div class="form-person">
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
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'form-person',
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters({
        person: 'person/person'
      })
    },
    methods: {
      postPerson: function () {
        this.$store.dispatch('person/doPostPerson', this.person)
        this.$store.dispatch('person/doClearPersonInput')
      }
    }
  }
</script>

<style scoped>
  .form-person .form-group {
    text-align: left;
  }
  .form-person label {
    font-weight: 600;
  }
  .form-person button {
    width: 100%;
  }
</style>
