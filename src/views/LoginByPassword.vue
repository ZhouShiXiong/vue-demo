<template>
  <div class="wrap">
    <Header title="密码登录" />
    <div class="content">
      <LoginPassword />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import LoginPassword from '@/components/Login/login-password.vue'
  import Header from '@/components/Header/index.vue'
  export default {
    components: {
      LoginPassword,
      Header
    }
  }
</script>
