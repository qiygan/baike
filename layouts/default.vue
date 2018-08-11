<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <nuxt/>
    </div>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
export default {
  name: 'Default',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
<style lang="scss">
  .container {
    padding-top: 120px;
  }
</style>
