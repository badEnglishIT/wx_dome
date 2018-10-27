// pages/stu/stu.js
var WxParse = require('../../utils/wxParse/wxParse.js');
const html = `<table style="border-spacing: 0px">
  <tr>
    <td style="border:1px rgb(224,224,224) solid;">123</td>
    <td style="border:1px rgb(224,224,224) solid;">123</td>
  </tr>
  
</table>`;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    html,
    nodes:[
      {
       text:'<div>123</div>'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'http://push.com/api/index/lx',
      success:function(res){
        console.log(res);
        console.log(res.data.data.details)
        WxParse.wxParse('details', 'html', res.data.data.details, that)
      }
      
    })
  },
  onShow: function () {
    console.log(this.route)
  }
})