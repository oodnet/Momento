<template>
  <span ref="trigger" />
</template>

<script>
export default {
  name: 'Trigger',
  data() {
    return {
      observer: null
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      this.handleIntersect(entries[0])
    }, {
      root: null,
      threshold: "0"
    })

    this.observer.observe(this.$refs.trigger)
  },
  destroyed() {
    this.observer.disconnect()
  },
  methods: {
    handleIntersect(entry) {
      if (entry.isIntersecting) {
        this.$emit('triggerIntersected')
      }
    }
  }
}
</script>