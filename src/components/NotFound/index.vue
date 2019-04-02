<template>
    <div class="notfound">
        <div class="goback">
            <van-button type="primary"  size="large">返回</van-button>
        </div>
    </div>
</template>



<script>
    import { Button } from 'vant';
    export default {
        components: {
              [Button.name]: Button,
        },
        data() {
            return {};
        },
    };
</script>

<style lang="scss">
    .notfound {
        height: 100vh;
        background: url('~@/assets/images/404.jpeg') 18% 14% no-repeat;
        background-size: cover;
        .goback {
            position: fixed;
            bottom: 60px;
            left: 20px;
            right: 20px;
        }
    }
</style>