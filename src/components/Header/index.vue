<template>
  <div class="header">
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" />
  </div>
</template>



<script>
  import {
    NavBar
  } from 'vant';
  export default {
    components: {
      [NavBar.name]: NavBar,
    },
    props: {
      title: String,
      url: String,
      back: Boolean,
    },
    methods: {
      onClickLeft() {
        const url = this.url
        if (url) {
          this.$router.push(url)
        } else {
          window.history.length > 1 ?
            this.$router.go(-1) :
            this.$router.push('/')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    flex-shrink: 0;
  }
</style>
