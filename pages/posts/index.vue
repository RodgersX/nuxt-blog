<template>
  <div class="posts-page">
    <PostList />
  </div>
</template>

<script>
export default {
  components: {
    PostList: require('~/components/Posts/PostList.vue').default,
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
