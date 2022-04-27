<template>
  <a-layout-content class="main">
    <AppCarousel />
    <div class="main_wrapper">
      <div class="main_filter-container">
        <div class="main_filter-wrapper">
          <AppSelector />
          <AppDatePicker />
        </div>
      </div>
      <div class="main_posts-container">
        <AppPostCard
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :body="post.body"
          :user="findUser(post.userId)"
        />
      </div>
    </div>
  </a-layout-content>
</template>

<script>
import AppCarousel from '@/components/AppCarousel.vue';
import AppSelector from '@/components/AppSelector.vue';
import AppDatePicker from '@/components/AppDatePicker.vue';
import AppPostCard from '@/components/AppPostCard.vue';

import { users } from "../api/fetchUsers";
import { posts } from "../api/fetchPosts";

export default {
  name: 'AppMain',
  components: {
    AppCarousel,
    AppSelector,
    AppDatePicker,
    AppPostCard,
  },
  mounted() {
    // console.log(users, posts)
  },
  data() {
    return {
      users,
      posts,
    }
  },
  methods: {
    findUser(userId) {
      return this.users.find(user => user.id === userId)
    }
  }
}
</script>
