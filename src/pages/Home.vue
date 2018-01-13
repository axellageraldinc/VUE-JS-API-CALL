<template>
  <div class="home">
    <h3>Spring Boot + Vue JS</h3><br>
    <FormPerson/>
    <TablePerson/>
  </div>
</template>

<script>
    import FormPerson from '@/components/FormPerson'
    import TablePerson from '@/components/TablePerson'

    export default {
      name: 'home',
      components: {
        FormPerson,
        TablePerson
      }
    }
</script>

<style scoped>
  .home{
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
</style>
