const wx = require('weixin-js-sdk')
import  serverConfig from '../config/server'
const axios = require('axios')



export const wechatShare =(product)=>{
    const url = document.location.href.split('#')[0]
    axios.get(`${serverConfig.server_url}/api/wechatShare`,{
        params: {
             url
         }
       }).then((res)=>{
      let result = res.data.parameter;
      wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: 'wx9ca3272fed4926ba',
            timestamp: result.timestamp, // 必填，生成签名的时间戳
            nonceStr: result.nonceStr, // 必填，生成签名的随机串
            signature: result.signature,// 必填，签名
            jsApiList: ['onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone']// 必填，需要使用的JS接口列表
        });
        wx.error(function(res){
        });
        wx.ready(function(){
           // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
           wx.onMenuShareTimeline({
               title: product.brief, // 分享标题
               link:`${url}#/share/${product._id}`, // 分享链接
               imgUrl: product.cover, // 分享图标
               success: function () {
               },
               cancel: function () {
               }
           });
           wx.onMenuShareAppMessage({
               title: product.brief, // 分享标题
               link: `${url}#/share/${product._id}`, // 分享链接
               imgUrl: product.cover, // 分享图标
               success: function () {
               },
               cancel: function () {
               }
           });
    });
  
    })
  
      wx.checkJsApi({
      jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
      success: function(res) {
      }
  });
  
  
  
  }
