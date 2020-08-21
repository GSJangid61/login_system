<template>
  <q-layout class="qlayout">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutAuth',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
  .qlayout
    background url('~assets/auth-background.png') no-repeat center center fixed
    background-color #324E7B
    background-size cover
</style>
