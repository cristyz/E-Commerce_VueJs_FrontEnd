<template>
<!-- Footer -->
<footer class="page-footer font-small unique-color-dark pt-4">

  <!-- Footer Elements -->
  <div class="container">

    <!-- Call to action -->
    <ul class="list-unstyled list-inline text-center d-flex justify-content-center align-items-center">
      <li class="list-inline-item">
        <strong>Register for free</strong> 
      </li>
      <li class="list-inline-item">
        <a @click="singUpPage" class="btn btn-rounded text-white" style="background: orange">Sign up!</a>
      </li>
    </ul>
    <!-- Call to action -->

  </div>
  <!-- Footer Elements -->

</footer>
<!-- Footer -->
</template>

<script>
export default {
    name:'Footer',
    methods: {
      singUpPage() {
        this.$router.push('/singup')
      }
    }

}
</script>

<style>

</style>