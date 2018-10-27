// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    video: [
      { 'file': '/static/1.mp4', 'img':'/static/banner.jpg'}, 
      { 'file': '/static/1.mp4', 'img': '/static/banner.jpg' }, 
      { 'file': '/static/1.mp4', 'img': '/static/banner.jpg' }, 
      { 'file': '/static/1.mp4', 'img': '/static/banner.jpg' }, 
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //播放视频
  playVoide: function (e) {
    var index = e.currentTarget.dataset.id;
    var video = this.data.video;

    for (var i in video) {
      video[i]['hidden'] = '';
    }
    video[index]['display'] = true;
    video[index]['hidden'] = true;
    this.setData({
      video: video
    })
    console.log(index);

    setTimeout(function () {
      var videoContext = wx.createVideoContext('' + index + '', this);
      videoContext.play();
    }, 100)

    console.log(this.data.video)
  }

  
})