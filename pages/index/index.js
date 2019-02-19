Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:{'k':'a'},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setEnableDebug({
      enableDebug: true
    })
    
  },
  //跳转控制视频播放
  selectVideo:function(){
    wx.navigateTo({
      url: '/pages/video/video',
    })
  },
  //跳转图片缩略
  thumbImg:function(){
    wx.navigateTo({
      url: '/pages/thumbImg/thumbImg',
    })
  },
  //跳转点击事件
  click: function () {
    wx.navigateTo({
      url: '/pages/click/click',
    })
  },
  //跳转promise示例
  promise:function(){
    wx.navigateTo({
      url: '/pages/promise/promise',
    })
  },
  strData:function(){
    wx.navigateTo({
      url: '/pages/strData/strData',
    })
  },
  interceptor:function(){
    wx.navigateTo({
      url: '/pages/interceptor/interceptor',
    })
  },
  noresubmit:function(){
    wx.navigateTo({
      url: '/pages/noresubmit/noresubmit',
    })
  },
  logs: function () {
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },
  scrollView:function(){
    wx.navigateTo({
      url: '/pages/scrollView/scrollView',
    })
  }
})