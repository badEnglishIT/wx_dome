// pages/interceptor/interceptor.js
const handler = {
  get: function (obj, prop) {
    console.log(obj);
    console.log(prop);
  }
}

const initialObj = {
  id: 1,
  name: 'Foo Bar'
}
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
    const proxiedObj = new Proxy(initialObj, handler);
    var x = proxiedObj.name;
  },
})