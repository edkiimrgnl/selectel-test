<template>
  <a-layout-header class="header">
    <div class="logo-container">
      <img class="header_logo" src="@/assets/selectel_logo.svg" alt="Selectel">
    </div>
    <div class="header_contact-container">
      <p class="header_telephone">
<!--        {{ telephone }}-->
        <img src="@/assets/phone.svg" alt="phone">
      </p>
      <p class="header_email">
<!--        {{ email }}-->
        <img src="@/assets/mail.svg" alt="email">
      </p>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      telephone: '8 800 555 06 75',
      email: 'sales@selectel.ru'
    }
  }
}
</script>

<style>

</style>
