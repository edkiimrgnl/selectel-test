<template>
  <div class="card-container">
    <a-card :title="title" class="card">
      <p class="card_body-text">{{ body }}</p>
      <div>
        <a-badge
            :count="user.name"
            :number-style="{ backgroundColor: 'rgba(9, 36, 51, 1)' }"
        ></a-badge>
        <a-badge
            :count="user.email"
            :number-style="{
            backgroundColor: 'transparent',
            color: 'rgba(89, 89, 89, 1)',
            borderColor: 'rgba(232, 232, 232, 1)'
          }"
        ></a-badge>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    body: String,
    user: Object,
  },
  name: 'AppPostCard',
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
.card-container {
  margin: 10px;
}
.card {
  width: 360px;
  height: 260px;
}
</style>
