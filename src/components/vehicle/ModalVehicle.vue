<template>
    <div>
      <div class="modal fade" id="modal-vehicle" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Vehicles</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
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
  import TableVehicle from '@/components/vehicle/TableVehicle'

  export default {
    name: 'modal-vehicle',
    components: {
      TableVehicle
    }
  }
</script>

<style scoped>

</style>
