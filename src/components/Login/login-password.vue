<template>
    <div class="code-login">
        <div class="code-login-bg">
            <!-- <img :src="logo" /> -->
            <div class="code-login-img">

            </div>
        </div>
        <div class="login-wrap">
            <van-field v-model="username" label="手机号" left-icon="contact" placeholder="请输入手机号" />
            <van-field v-model="password" label="密码" type='password' left-icon="contact" placeholder="请输入密码" />
            <div class="link">
                <span @click='jump' class="linkstyle">验证码登录</span>
            </div>
            <div class="loginbutton">
                <van-button class="button" size="large" type="primary" @click='signup'>注册</van-button>
                <van-button class="button" size="large" type="primary" @click='login'>登录</van-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        Button,
        Field,
        CellGroup,
        Toast
    } from "vant";
    import {
        getToken,getPath
    } from '@/utils/auth'
    import logo from '@/assets/images/xianzhi-logo.png'
    export default {
        name: "login-password",
        components: {
            [Field.name]: Field,
            [Button.name]: Button,
            [Toast.name]: Toast,
            [CellGroup.name]: CellGroup,
        },
        data() {
            return {
                logo,
                username: '',
                password: ''
            };
        },
        mounted(){
          console.log('路由'+getPath());

        },
        methods: {
            jump() {
                this.$router.push('/login')
            },
            signup() {
                this.$router.push({name:'login-signup'})
            },
            login() {
              let phone = this.username;
              if (!phone) {
                Toast.fail({
                    duration: 1000,
                    message: '手机号不能为空'
                });
                return false;
              }
              if (!(/^1[34578]\d{9}$/.test(phone))) {
                  Toast.fail({
                      duration: 1000,
                      message: '手机号码格式错误请重新输入'
                  });
                  return false;
              }
              if (!this.password) {
                Toast.fail({
                    duration: 1000,
                    message: '密码不能为空'
                });
                return false;
              }
                const userinfo = {
                    'username': this.username,
                    'password': this.password
                };

                //.log(userinfo);
                this.$store.dispatch('user/Login', userinfo).then((res) => {
                    if (res.status == 200) {
                        this.$store.dispatch('appuser/GetAppuser',res.userId)
                        Toast.success({
                            duration: 2000,
                            message: '登录成功'
                        });
                        this.$router.push(getPath())
                    }
                    if (res.status == 406) {
                        Toast.fail({
                            duration: 2000,
                            message: res.msg
                        });
                    }
                }).catch(() => {
                })
            }
        }
    };
</script>

<style lang="scss">
    .code-login {
        &-bg {
            width: 100%;
            height: 260px;
            background: url('~@/assets/images/login_bg.3a93a8bf.jpg') center center;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            .code-login-img {
                width: 300px;
                height: 300px;
            }
        }
        .login-wrap {
            width: 90%;
            margin: -30px auto 0 auto;
            .van-button {
                border-radius: 5px;
            }
        }
        .van-cell {
            border-radius: 10px;
            margin-bottom: 20px;
            &:first-child {
                padding: 13px 15px;
            }
        }
    }
    .link {
        padding: 5px;
        height: 40px;
        display: flex;
        justify-content: flex-end;
    }
    .linkstyle {
        text-decoration: underline;
        font-size: 16px;
        color: #aaa
    }
    .loginbutton {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .button {
        width: 40%
    }
</style>
