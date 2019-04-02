<template>
  <div>
    <div class="personal-head">
        <div class="personal-head-content">

        </div>
        <!-- <div class="personal-head-content content-center">
          <div class="cover" v-if=" user.headerl===null ">
            <img class='image' src="https://res.cloudinary.com/ddycd5xyn/image/upload/v1546411787/uqp4nsrd03llqtk7dy2j.png" alt="111">

          </div>
          <div class="cover" v-else>
            <img class='image' :src="user.headurl" alt="222">

          </div>
        </div> -->
        <!-- <div class="personal-head-content content-center">
          <span class="font-color">{{user.nickname}}</span>の店
        </div> -->
    </div>
    <!-- <img class="user-poster" :src="personlbg" /> -->
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" @click="toOrders('unconfirmed')" /> 待付款
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" @click="toOrders('paid')"/> 已付款
      </van-col>
      <van-col span="6">
        <van-icon name="pending-deliver" is-link to="/orders" @click="toOrders('recevied')"/> 已收货
      </van-col>
      <van-col span="6">
        <van-icon name="close" @click="toOrders('cancel')"/> 已取消
      </van-col>
    </van-row>
    <van-cell-group class="user-group-bottom">
      <van-cell  icon="points-mall" title="商品库房" @click='allproducts' is-link  />
      <van-cell icon="records" title="全部订单" is-link @click="toOrder" />
      <van-cell icon="contact"  v-if="senior" title="我的团队" is-link to='/myteam'/>
      <van-cell icon="idcard" title="我的银行卡" is-link to='/bankcard' />
      <van-cell icon="location" title="地址管理" is-link to="/address/my" />
      <van-cell icon="edit-data" title="个人信息" is-link to='/editdata'/>
      <van-cell icon="location" title="退出登录" @click='logout' />
    </van-cell-group>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import personlbg from '@/assets/images/personlbg.jpeg'
  import {
    Row,
    Col,
    Icon,
    Cell,
    CellGroup,
    Button,
    Dialog
  } from 'vant';
  import {
    getUserId,getSenior,getVipCard
  } from '@/utils/auth'
  export default {
    components: {
      [Row.name]: Row,
      [Col.name]: Col,
      [Icon.name]: Icon,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Button.name]: Button,
      [Dialog.name]: Dialog,
    },
    data(){
      return {
        senior:false,
        personlbg
      }
    },
    computed: mapState({
      agencyRole: state => state.appuser.agencyRole,
      user: state => state.appuser.user,
    }),
    mounted() {
      if (getSenior()=='true') {
        this.senior = true
      }else {
        this.senior = false
      }
    },
    methods: {
      allproducts(){
        if (this.agencyRole) {
          this.$router.push('/allproducts')
        }else {
          let id = getVipCard()
          console.log('查看商品id卡号'+id);
          Dialog.confirm({
              message: '开店需要购买优选会员卡，是否立即购买？',
              confirmButtonText:'去购买'
            }).then(() => {

              this.$router.push({
                  name: 'goods',
                  params: {
                      id
                  }
              })
            }).catch(() => {
              // on cancel
            });

        }
      },
      toOrder() {
        let index = 0
        this.$store.dispatch('order/SelectIndex', index)
        this.$router.push('/orders')
      },
      logout() {

        Dialog.confirm({
          message: '请确认是否退出登录'
        }).then(() => {

          this.$store.dispatch('user/LogOut')
          this.$store.dispatch('appuser/LogOut')
          //.log('退出后的userid'+getUserId())

          this.$router.push('/login')
        }).catch(() => {
          // on cancel
        });
      },
      toOrders(status) {
        let index = 0

        //.log('传进来的状态'+status);
        if (status=='unconfirmed') {
          index = 0
        }
        if (status=='paid') {
          index=1
        }
        if (status=='recevied') {
          index=2
        }
        if (status=='cancel') {
          index=3
        }
        this.$store.dispatch('order/SelectIndex', index)
        this.$router.push('/orders')
      }
    }
  };
</script>

<style lang="scss" scoped>
  .user-poster {
    width: 7.5rem;
    height: 4rem;
    display: block;
  }
  .personal-head{
    width: 100%;
    height: 220px;
    background-image: url('~@/assets/images/personlbg.jpeg');background-repeat:no-repeat; background-size:100% 100%;-moz-background-size:100% 100%;
    display: flex;
    flex-direction: column;
  }
  .personal-head-content{
    width: 100%;
    height: 100%
  }
  .user-group {
    margin-bottom: .3rem;
  }
  .user-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
  .van-cell__title {
    text-align: left;
    text-indent: 10px;
  }
  .user-group-bottom {
    margin-bottom: 100px;
  }

  .content-center{
    display: flex;
    align-self: flex-end;

    justify-content: center;
    font-size: 16px;
  }

  .cover{
    width: 70px;
    height: 70px;
  }

  .image{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    /* background-size:100% 100%; */
  }
  .font-color{
    color:#ff9400c4
  }
</style>
