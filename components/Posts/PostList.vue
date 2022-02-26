<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://institute.global/sites/default/files/styles/teaser_large/public/2021-06/GettyImages-1165900389.jpg?itok=f-DcPSZ9"
      title="Hello there!"
      preview-text="This is my first post!"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://institute.global/sites/default/files/styles/teaser_large/public/2021-06/GettyImages-1165900389.jpg?itok=f-DcPSZ9"
      title="Hello there - the second time!"
      preview-text="This is my second post!"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://institute.global/sites/default/files/styles/teaser_large/public/2021-06/GettyImages-1165900389.jpg?itok=f-DcPSZ9"
      title="Hello!"
      preview-text="This is my third post!"
    />
  </section>
</template>

<script>
export default {
  components: {
    PostPreview: require('~/components/Posts/PostPreview.vue').default,
  },

  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
