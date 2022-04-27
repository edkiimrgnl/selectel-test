<template>
  <a-layout-header class="header">
    <div class="logo-container">
      <img class="header_logo" src="@/assets/selectel_logo.svg" alt="Selectel">
    </div>
    <div class="header_contact-container">
      <div class="header_telephone on-hover-color">
        <p v-if="widthResponse">
          {{ telephone }}
        </p>
        <img v-else src="@/assets/phone.svg" alt="phone">
      </div>
      <div class="header_email on-hover-color">
        <p v-if="widthResponse">
          {{ email }}
        </p>
        <img v-else src="@/assets/mail.svg" alt="email">
      </div>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      widthResponse: false,
      telephone: '8 800 555 06 75',
      email: 'sales@selectel.ru'
    }
  },
  created() {
    window.addEventListener('resize', this.resizeHandler);
  },
  unmounted() {
    window.removeEventListener('resize', this.resizeHandler);
  },
  mounted() {
    this.changeWidthResponseData();
  },
  methods: {
    checkWidth() {
      return window.innerWidth >= 1200;
    },
    changeWidthResponseData() {
      this.widthResponse = this.checkWidth();
    },
    resizeHandler(e) {
      this.changeWidthResponseData();
    }
  }
}
</script>

<style>

</style>
