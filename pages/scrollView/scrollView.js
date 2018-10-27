// pages/scrollView/scrollView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop:1000,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.getNodeInfo();
   
  },

  getNodeInfo: function () {
     var showHeight=300;
     var that = this;
    wx.createSelectorQuery().select('.scroll').fields({
     
  
      size: true,
   
    }, function (res) {
       console.log(res)
       //that.setData({ scrollTop: res.top });

    }).exec()
    // const query = wx. ()
    // query.select('.lx').boundingClientRect()
    // query.selectViewport().scrollOffset()
    // query.exec(function (res) {
    //   that.setData({ scrollTop: res[0].bottom - showHeight });
    //   console.log(res)
    //   res[0].top       // #the-id节点的上边界坐标
    //   res[1].scrollTop // 显示区域的竖直滚动位置
    // })
  },

})