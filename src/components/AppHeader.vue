<template>
  <a-layout-header class="header">
    <div class="logo-container">
      <img class="header_logo" src="@/assets/selectel_logo.svg" alt="Selectel">
    </div>
    <div>
      <p class="header_telephone">
        {{ telephone }}
      </p>
      <p class="header_email">
        {{ email }}
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
