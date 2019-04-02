<template>
  <div class="wrap">
    <Header title="注册" />
    <div class="content">
      <LoginSignup />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import LoginSignup from '@/components/Login/login-signup.vue'
  import Header from '@/components/Header/index.vue'
  export default {
    components: {
      LoginSignup,
      Header
    }
  }
</script>
