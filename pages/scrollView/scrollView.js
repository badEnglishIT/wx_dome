// pages/scrollView/scrollView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    data: [96, 97, 98, 99, 100],
    toViewStr:'toView',
    scrollTop:10000,
    toViewId:0,
    isLoad:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  top:function(e){
    console.log('到顶了');
    this.setData({isLoad:true});
    this.lx();
    console.log(this.data)
  },
  lx:function(){
    var that=this;
    var data=this.data.data;
    var cnt=100-data.length;
    var tmp=[];
    for (var i = cnt - 5; i <= cnt;i++){
      tmp.push(i);
    }
    setTimeout(function () {
      that.setData({
        data: tmp.concat(data),
        toViewId: tmp.length,
      })
    }, 500)
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