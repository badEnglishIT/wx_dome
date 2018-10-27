// pages/promise/promise.js
 var wxapi= require("../../utils/wxapi.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    
    
    
    this.lx().then(function(res){
      console.log(res);
      return that.api('https://auc.ymindex.com/index//index/index');
    }).then(function(res){
      console.log('接口响应完成了才执行这里')
      console.log(res);
      return that.api('https://auc.ymindex.com/index//index/index');
    }).then(function (res) {
      console.log('第二接口响应完成了才执行这里')
      console.log('成功2')
      console.log(res);
      return that.api('https://auc.ymindex.com/index//index/inde2x');
    }).catch(function(){
      console.log('接口响应失败了才执行这里')
      console.log('失败')
    })

    //引用封装
    // var wsAPI=wxapi.wsAPI;
    // wsAPI.taskSequence()
    //   .then(() => wsAPI.showLoading({ title: "保存中" }))
    //   .then(() => wsAPI.hideLoading())
    //   .then(() => wsAPI.showLoading({ title: "载入中" }))
    //   .then(() => wsAPI.hideLoading())
    //   .then(() => wsAPI.request({
    //     url: 'https://auc.ymindex.com/index//index/index',
    //     header: {
    //       'content-type': 'application/json' // 默认值
    //     },
    //     success: function (res) {
    //       console.log({ '功能': '请求掌柜推荐', '返回数据': res });   
    //     }
    //   }))
    //   .then(function(x,y){
    //     console.log(x,y)
    //   })
    //   .then(() => console.log("done"))
    // console.log(wxapi)
  },
  lx:function(){
    return new Promise(function (resolve, reject){
      resolve('执行API');
    })
    
  },
  api:function(url){
    return new Promise(function (resolve, reject) {
      wx.request({
        //获取掌柜推荐
        url: url,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          if (res.statusCode==200){
            resolve(res);
          }else{
            reject('失败');
          }    
        },
        fail: function () {
          reject('失败');
        }
      })
    })
  }
})