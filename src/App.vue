<template>
  <a-layout>
    <AppHeader />
    <a-layout-content>Content</a-layout-content>
    <AppFooter />
  </a-layout>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>
