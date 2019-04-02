<template>
  <div class="wrap">
    <Header title="手机验证登录" />
    <div class="content">
      <CodeLogin />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import CodeLogin from '../components/Login/code-login.vue'
  import Header from '../components/Header/index.vue'
  export default {
    components: {
      CodeLogin,
      Header
    }
  }
</script>
