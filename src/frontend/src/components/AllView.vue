<template>
  <Gallery :photos="photos"/>
  <Trigger @triggerIntersected="handleTrigger"/>
  <!-- stolen svg, replace eventually -->
  <div class="h-32 w-10 m-auto">
    <svg class="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="#000000" stroke-width="4"></circle>
      <path class="opacity-75" fill="#EEE" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  </div>
</template>

<script>
import Gallery from '../components/Gallery.vue'
import Trigger from '../components/Trigger.vue'

export default {
  name: 'AllView',
  data() {
    return {
      photos: []
    }
  },
  components: {
    Gallery,
    Trigger
  },
  methods: {
    handleTrigger() {
      this.getMorePhotos(10)
    },
    async getMorePhotos(number) {
      // replace with get req to server for more photos
      for (let i=0; i<number; i++) {
        const resp = await this.axios.get(`/photos/${i+1}`, {'Accept': 'application/json'})
        this.photos.push(resp.data)
        console.log(resp.data)
        // this.photos.push({url: 'https://via.placeholder.com/' + Math.floor(Math.random() * (1024 - 512 + 1) + 512) + 'x' + Math.floor(Math.random() * (1024 - 512 + 1) + 512)})
      }
    }
  },
  created: function() {
    // this.getMorePhotos(10)
  },
  destroyed: function() {
  }
}
</script>

<style scoped>
</style>