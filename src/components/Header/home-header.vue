<template>
  <div class="home-header" >
    <!-- <img :src="logo" /> -->
    <div class="home-left">

    </div>
    <van-search placeholder="请输入搜索关键词" />
    <van-icon name="setting" class="home-icon" />
  </div>
</template>



<script>
  import {
    NavBar,
    Search,
    Icon
  } from 'vant';
  import logo from '@/assets/images/xianzhi-logo.png'
  export default {
    components: {
      [NavBar.name]: NavBar,
      [Search.name]: Search,
      [Icon.name]: Icon,
    },
    data() {
      return {
        logo,
      }
    },
    props: {
      title: String,
    },
    methods: {
      onClickLeft() {
        window.history.length > 1 ?
          this.$router.go(-1) :
          this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss" scoped>

  .home-header {
    display: flex;
    background: #f2f2f2;
    justify-content: space-between;
    height: 60px;
    flex-shrink: 0;
    align-items: center;
    .home-left {
      margin-left: -10px;
      margin-right: -30px;
      width: 100px;
      height: 100px;
    }
    .van-search .van-cell {
      padding: 4px 40px;
    }
    .home-icon {
      font-size: 20px;
      margin-right: 20px;
    }
  }
</style>
