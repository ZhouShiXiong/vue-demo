<template>
  <div class="wrap">
    <HomeHeader />
    <div class="content">
      <Swipe />
      <!-- <van-tabs v-model="active" swipeable @change="onChange" class="home-category">
        <van-tab v-for="(item,index) in category" :title="item" :key="index">
          <ProductList :products="products"/> 
        </van-tab>
      </van-tabs> -->
    </div>
    <Footer />
  </div>
</template>

<script>
  // @ is an alias to /src
  import HomeHeader from '../components/Header/home-header.vue'
  import Footer from '../components/Footer/index.vue'
  import Swipe from '../components/Swipe/index.vue'
  import { mapState } from 'vuex'
  import {
    Tab,
    Tabs
  } from 'vant';
  export default {
    components: {
      HomeHeader,
      Swipe,
      Footer,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs
    },
    data() {
      return {
        category: ['推荐'],
        active: 2,
        back: false,
      }
    },
    computed: mapState({
      products: state => state.product.list
    }),
    mounted() {
      this.$store.dispatch('product/GetProducts')
      this.$store.dispatch('product/GetCategories')
    },
    methods: {
      onChange(index) {
        console.log(index)
      }
    }
  }
</script>