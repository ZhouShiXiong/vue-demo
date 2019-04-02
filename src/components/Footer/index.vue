<template>
  <div class="footer">
    <van-tabbar v-model="active" @change="Jump">
      <van-tabbar-item icon="home">首页</van-tabbar-item>
      
      <van-tabbar-item icon="contact">我的</van-tabbar-item>

    </van-tabbar>
  </div>
</template>



<script>
  import {
    Tabbar,
    TabbarItem
  } from "vant";
  import {
    mapState
  } from "vuex"
  export default {
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem
    },
    data() {
      return {
        goArr: [
          '/',
          '/personal'
        ]
      };
    },
    computed: mapState({
      active: state => state.footer.active
    }),
    methods: {
      Jump: function(index) {
        console.log(index)
        this.$store.commit('footer/changeActive', index)
        console.log(this.goArr[index])
        this.$router.push(this.goArr[index])
      }
    }
  };
</script>
