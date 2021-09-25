<template>
  <img :src="url" class="p-4 sm:p-1" />
</template>

<script>
export default {
  name: 'Photo',
  props: ['url'],
  data() {
    return {
    }
  }
}
</script>

<style scoped>
img {
  max-height: 100%;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
}
</style>