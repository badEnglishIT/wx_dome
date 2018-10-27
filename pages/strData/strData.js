// pages/strData/strData.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: { 'k': 'a' },
    array:[{'k':'a'}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var x = 'arr.k';
    this.setData({
      [x]: '1'
    })
    console.log(this.data.arr);
    this.setData({
      'arr.k':'2'
    })
    console.log(this.data.arr);
    this.setData({
      'array[0].k': '3'
    })
    console.log(this.data.array);
  },
})