<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  components: {
    AdminPostForm: require('~/components/Admin/AdminPostForm.vue').default,
  },
  data() {
    return {
      loadedPost: {
        author: 'Mawira',
        thumbnailLink:
          'https://institute.global/sites/default/files/styles/teaser_large/public/2021-06/GettyImages-1165900389.jpg?itok=f-DcPSZ9',
        title: 'My awesome post',
        content: 'super amazing, thanks for that',
      },
    }
  },
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
