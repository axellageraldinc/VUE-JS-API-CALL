<template>
  <div class="form-person">
    <div class="form-group">
      <label>Name</label>
      <input id="inputPersonName" v-model="personInput.name" type="text" class="form-control" placeholder="Enter name">
      <div class="form-control-feedback" ref="errorName"></div>
    </div>
    <div class="form-group">
      <label>Age</label>
      <input id="inputPersonAge" v-model="personInput.age" type="text" class="form-control" placeholder="Enter Age">
      <div class="form-control-feedback" ref="errorAge"></div>
    </div>
    <div class="form-group">
      <label>Address</label>
      <input v-model="personInput.address" type="text" class="form-control" placeholder="Enter Address">
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
        personInput: {
          name: '',
          age: 0,
          address: ''
        }
      }
    },
    computed: {
      ...mapGetters({
      })
    },
    methods: {
      postPerson: function () {
        this.$store.dispatch('person/doPostPerson', this.personInput)
        this.personInput = {
          name: '',
          age: 0,
          address: ''
        }
        // if (this.postPersonError.length < 1) {
        //   console.log('validation success')
        // } else {
        //   console.log('validation failed')
        //   // for (var error in this.postPersonError) {
        //   //   if (this.postPersonError[error].field === 'name') {
        //   //     this.$refs.errorName.innerHTML = this.postPersonError[error].defaultMessage
        //   //   } else if (this.postPersonError[error].field === 'age') {
        //   //     this.$refs.errorAge.innerHTML = this.postPersonError[error].defaultMessage
        //   //   }
        //   // }
        // }
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
