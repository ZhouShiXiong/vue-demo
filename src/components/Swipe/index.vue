<template>
    <div class="swiper">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img  v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>



<script>
    import {
        Swipe,
        SwipeItem,
        Lazyload
    } from 'vant'
    export default {
        name: 'swiper',
        data() {
            return {
                images: [
                    'http://cdn3.10000cars.cn/wp-content/uploads/2018/11/2018111309011948.jpg',
                    'http://cdn3.10000cars.cn/wp-content/uploads/2018/11/2018111309013585.jpg'
                ]
            }
        },
        components: {
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
            [Lazyload.name]: Lazyload,

        },
    }
</script>

<style lang="scss">
    .swiper {
        img {
            width: 100%;
            height: auto;
        }
        .van-swipe__indicators {
            bottom: 30px;
        }
        .van-swipe {
            overflow: hidden;
        }
    }
</style>