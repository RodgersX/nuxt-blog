<template>
  <div class="error-page">
    <h1>OOps! Something went wrong!</h1>
    <!-- javascript code crashes
    calls for a normal link -->
    <p>Back to <a href="/">safety</a>!</p>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}
</style>
