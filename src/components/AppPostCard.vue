<template>
  <div class="card-container">
    <a-card :title="title" class="card" :head-style="titleStyle">
      <p class="card_body-text">{{ body }}</p>
      <div class="card_badge-container">
        <a-badge
          :count="user"
          :number-style="{ backgroundColor: 'rgba(9, 36, 51, 1)' }"
        ></a-badge>
        <a-badge
          :count="date"
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
    user: String,
    date: String,
  },
  name: 'AppPostCard',
  data() {
    return {
    }
  },
  computed: {
    titleStyle() {
      return {
        color: 'rgba(0, 0, 0, 0.65)',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '22px',
        letterSpacing: '0',
        textAlign: 'left',
      }
    }
  }
}
</script>
