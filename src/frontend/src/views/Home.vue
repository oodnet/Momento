<template>
  <AllView />
</template>

<script>
import AllView from '../components/AllView.vue'

export default {
  name: 'Home',
  data() {
    return {

    }
  },
  components: {
    AllView
  },
  methods: {
    async getData() {
      // const data = await this.axios.get('/api', {'Accept': 'application/json'}) //.then(response => console.log(response))
      // console.log(data.data.photos[0].desc)
    }
  },
  created: function() {
  }
}
</script>

<style scoped>

</style>