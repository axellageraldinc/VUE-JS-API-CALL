<template>
    <div>
      <div class="modal fade" id="modal-vehicle" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Vehicles {{ name }}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h6>{{ name }}</h6>
              <!--<div v-for="data in item">-->
                <!--<h6>{{ data.id }}</h6>-->
                <!--<h6>{{ data.name }}</h6>-->
                <!--<h6>{{ data.address }}</h6>-->
              <!--</div>-->
              <FormVehicle/>
              <TableVehicle/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import FormVehicle from '@/components/vehicle/FormVehicle'
  import TableVehicle from '@/components/vehicle/TableVehicle'

  export default {
    name: 'modal-vehicle',
    components: {
      FormVehicle,
      TableVehicle
    },
    props: ['name']
    // props: {
    //   name: ''
    //   // item: {
    //   //   id: 0,
    //   //   name: '',
    //   //   address: ''
    //   // }
    // }
  }
</script>

<style scoped>

</style>
