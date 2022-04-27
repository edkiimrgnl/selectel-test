<template>
  <a-layout-content class="main">
    <AppCarousel />
    <div class="main_wrapper">
      <div class="main_filter-container">
        <div class="main_filter-wrapper">
          <AppSelector :users="userNames" @user-selected="onSelected"/>
          <AppDatePicker @date-set="onDateSet" />
        </div>
      </div>
      <div class="main_posts-container">
        <AppPostCard
          v-for="post in filteredPosts"
          :key="post.id"
          :title="post.title"
          :body="post.body"
          :user="post.authorName"
          :date="post.date.formattedDate"
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

import { generatedRandomDate } from "../js/helpers";

export default {
  name: 'AppMain',
  components: {
    AppCarousel,
    AppSelector,
    AppDatePicker,
    AppPostCard,
  },
  data() {
    return {
      users,
      posts,
      filteredPosts: [],
      filteredUsers: [],
      dates: null,
    }
  },
  computed: {
    userNames() {
      return this.users.map(el => {
        return {
          value: el.name,
          label: el.name,
        }
      });
    }
  },
  watch: {
    filteredUsers() {
      this.filterPosts();
    },
    dates() {
      this.filterPosts();
    }
  },
  mounted() {
    this.fillPostsWithUsers();
    this.fillPostsWithDate();

    this.filteredPosts = this.posts;
  },
  methods: {
    findUser(userId) {
      return this.users.find(user => user.id === userId);
    },
    fillPostsWithDate() {
      this.posts.forEach(post => {
        post.date = generatedRandomDate();
      })
    },
    fillPostsWithUsers() {
      this.posts.forEach(post => {
        post.authorName = this.findUser(post.userId).name;
      })
    },
    filterPosts() {
      this.filteredPosts = !this.filteredUsers.length && !this.dates
          ? this.posts
          : this.posts.filter(post => {
            const postDate = new Date(post.date.date).getTime();

            const AuthorsIsIncludes = this.filteredUsers.includes(post.authorName);
            const dateIsInBetween = postDate >= this.dates?.startDate && postDate <= this.dates?.endDate;

            if (dateIsInBetween && AuthorsIsIncludes) {
              return true;
            } else if (dateIsInBetween) {
              return !this.filteredUsers.length;
            } else if (AuthorsIsIncludes) {
              return !this.dates;
            } else {
              return false;
            }
          })
    },
    onSelected(value) {
      this.filteredUsers = value;
    },
    onDateSet(value) {
      this.dates = value;
    }
  },
}
</script>
