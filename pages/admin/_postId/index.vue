<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'admin',

  components: {
    AdminPostForm: require('~/components/Admin/AdminPostForm.vue').default,
  },

  asyncData(context) {
    return axios
      .get(`${process.env.baseUrl}/posts/${context.params.id}.json`)
      .then((res) => {
        return {
          loadedPost: res.data,
        }
      })
      .catch((e) => context.error(e))
  },

  methods: {
    onSubmitted(editedPost) {
      axios
        .put(
          `${process.env.baseUrl}/posts/${this.$route.params.id}.json`,
          editedPost
        )
        .then((res) => {
          console.log(res)
        })
        .catch((err) => console.log(err))
    },
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
