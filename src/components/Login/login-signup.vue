<template>
    <div class="code-login">
        <div class="code-login-bg">
            <!-- <img :src="logo" /> -->
            <div class="code-login-img">

            </div>
        </div>
        <div class="wrap">
            <van-field v-model="username" label="手机号" left-icon="contact" placeholder="请输入手机号" />
            <van-field v-model="sms" center clearable label="短信验证码" left-icon="pending-evaluate" placeholder="请输入短信验证码">
              <van-button slot="button" size="small" @click='getsms' type="primary" :disabled="disabled">{{smsbutton}}</van-button>
            </van-field>
            <van-field v-model="password" label="密码" type='password' left-icon="contact" placeholder="请输入密码" />
            <div class="link">
                <span @click='jump' class="linkstyle">密码登录</span>
            </div>
            <van-button size="large" type="primary" @click='signup'>注册</van-button>
        </div>
    </div>
</template>

<script>
    import {
        Button,
        Field,
        Cell,
        Toast
    } from "vant";
    import {
        mapState,

    } from 'vuex'
    import {
      getSignupSMS,
      getSignupSmsTime,
      removeSignupSMS,
      removeSignupSmsTime,
        getPath
    } from '@/utils/auth'
    import logo from '@/assets/images/xianzhi-logo.png'
    export default {
        name: "login-signup",
        components: {
            [Field.name]: Field,
            [Button.name]: Button,
            [Cell.name]: Cell,
            [Toast.name]: Toast,
        },
        data() {
            return {
                logo,
                username: '',
                sms: '',
                disabled: false,
                smsbutton: '发送验证码',
                password: ''
            };
        },
        computed: mapState({
            smscode: state => state.appuser.signupsms,
        }),
        mounted(){
          console.log('路由'+getPath());

        },
        methods: {
            jump() {
                this.$router.push({
                    name: 'login-password'
                })
            },
            getsms() {
                let phone = this.username;
                // console.log(phone);
                if (!phone) {
                    Toast.fail({
                        duration: 1000, // 持续展示 toast
                        message: '手机号不能为空'
                    });
                    return false;
                }
                if (!(/^1[34578]\d{9}$/.test(phone))) {
                    Toast.fail({
                        duration: 1000, // 持续展示 toast
                        message: '手机号码格式错误请重新输入'
                    });
                    return false;
                }
                this.disabled = true;
                let timer = null;
                let countBack = 0
                let exeLoop = () => {
                    if (countBack === 60) {
                        clearInterval(timer);
                        this.smsbutton = '发送验证码'
                        this.disabled = false
                    } else {
                        this.currentTime = 60 - countBack
                        this.smsbutton = this.currentTime + '秒后重新获取'
                    }
                }
                timer = setInterval(() => {
                    exeLoop();
                    countBack++;
                }, 1000);
                this.$store.dispatch('user/GetSMS', phone).then((res) => {
                    if (res.status == 200) {
                        this.$store.dispatch('appuser/SetSignupSMS', res.num)
                        Toast.success({
                            duration: 2000, // 持续展示 toast
                            message: '获取短信成功'
                        });
                    } else {
                        Toast.fail({
                            duration: 2000, // 持续展示 toast
                            message: '短信获取失败请稍后再试'
                        });
                    }
                })
            },
            signup() {
                const userinfo = {
                    'username': this.username,
                    'password': this.password
                };
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
                if (!this.sms) {
                  Toast.fail({
                      duration: 1000,
                      message: '验证码不能为空'
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
                let sms_code = getSignupSMS()
                console.log(sms_code);
                if (this.sms==sms_code) {
                  let smsTime = getSignupSmsTime();
                  let localtime = new Date();
                  let time =  Date.parse(localtime)-Date.parse(smsTime)
                  if (time < 600000) {
                    console.log('走了这');
                    this.$store.dispatch('user/LoginSignup', userinfo).then((res) => {
                        if (res.status == 200) {
                            Toast.success({
                                duration: 2000,
                                message: '注册成功'
                            });
                            removeSignupSmsTime();
                            removeSignupSMS();
                            this.$router.push('/loginpassword')
                        }
                        if (res.status == 406) {
                            Toast.fail({
                                duration: 2000,
                                message: res.msg
                            });
                        }
                    }).catch(() => {
                    })
                  }else {
                    Toast.fail({
                        duration: 2000,
                        message: '验证码失效请重新获取'
                    });
                  }

                }else {
                  Toast.fail({
                      duration: 2000,
                      message: '验证码错误请重新输入'
                  });
                }



            }
        }
    };
</script>

<style lang="scss" scoped>
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
        .wrap {
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
</style>
