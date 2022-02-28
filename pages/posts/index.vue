<template>
  <div class="posts-page">
    <PostList :posts="posts"/>
  </div>
</template>

<script>
export default {
  components: {
    PostList: require('~/components/Posts/PostList.vue').default,
  },

  data() {
    return {
      posts: [],
    }
  },
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
