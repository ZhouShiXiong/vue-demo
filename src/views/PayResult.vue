<template>
  <div class="wrap">
    <Header title="支付结果" url="/"/>
    <div class="content">
        <PayResult />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header/index.vue'
  import PayResult from '../components/Pay/payResult.vue'
  export default {
    components: {
      Header,
      PayResult
    }
  }
</script>
