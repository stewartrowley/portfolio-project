<template lang="">
  <div>
    
  </div>
</template>
<script>
import PersonServices from '../services/PersonServices';
export default {
  created() {
    PersonServices.getPerson()
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },
}
</script>
<style lang="">
  
</style>