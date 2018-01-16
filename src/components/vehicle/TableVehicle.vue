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
          <td><button type="button" class="btn btn-primary">Delete</button></td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
  export default {
    name: 'table-vehicle',
    props: {
      personId: Number,
      vehicleList: [Array]
    }
  }
</script>

<style scoped>

</style>
