// pages/noresubmit/noresubmit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled:false,
    userDisabled:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  form:function(e){
    var that=this;
    this.setData({ disabled:true});
    console.log(e.detail.value)
    setTimeout(function(){
      that.setData({disabled:false})
    },2000);
    
  },
  getUserInfo:function(e){
    var that = this;
    //弹窗授权要加上这条
    if (this.data.userDisabled)return false;
    this.setData({ userDisabled: true });
    console.log(e)
    setTimeout(function () {
      that.setData({ userDisabled: false })
    }, 2000); 
  }
})