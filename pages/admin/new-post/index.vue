<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm />
    </section>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  components: {
    AdminPostForm: require('~/components/Admin/AdminPostForm.vue').default,
  },
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
