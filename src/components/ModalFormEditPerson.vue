<template>
    <div>
      <div class="modal fade" id="modal-form-edit-person" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Edit Person</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
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
                  <button @click="putPerson" type="submit" class="btn btn-primary" data-dismiss="modal">UPDATE</button>
                </div>
                <br>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">CLOSE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'modal-form-edit-person',
    data () {
      return {
      }
    },
    components: {
    },
    computed: {
      ...mapGetters({
        person: 'person/person'
      })
    },
    methods: {
      putPerson: function () {
        this.$store.dispatch('person/doPutPerson', this.person)
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
