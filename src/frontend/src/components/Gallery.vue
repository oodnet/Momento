<template>
  <div class="m-4 md:m-8 xl:m-16 2xl:m-32">
    <ul class="flex flex-wrap justify-center">
      <li v-for="photo in photos" :key="photo.url" class="flex-grow">
        <Photo :url="photo.url" />
      </li>
    </ul>
  </div>
</template>

<script>
import Photo from '../components/Photo.vue'

export default {
  name: 'Gallery',
  props: {
    photos: Array
  },
  data() {
    return {
    }
  },
  components: {
    Photo
  }
}
</script>

<style scoped>
li {
  height: 30vh;
  max-width: 50vw;
}
@media only screen and (max-width: 1280px) {
  li {
    max-width: 100%;
  }
}
@media only screen and (max-width: 640px) {
  li {
    min-width: 100%;
    min-height: 100%;
    max-height: 100vh;
    height: 100% !important;
  }
}
@media (max-aspect-ratio: 1/1) {
  li {
    height: 33.33vh;
  }
}
</style>