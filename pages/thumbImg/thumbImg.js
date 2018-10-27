Page({

  /**
   * 页面的初始数据
   */
  data: {
    thumbWidth:150,//缩略宽度
    thumbHeight:100,//缩略高度
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //预览图片
  preview: function () {
    var that = this;
    wx.chooseImage({
      success: function (res) {  
        wx.showLoading({ title: '图片生成中...' });
        var file = res.tempFilePaths[0];
        that.compress(file,200,false,function(res){
          wx.hideLoading();
          that.setData({imgpath: res.tempFilePath})
        })             
      }
    })
  },
  // 压缩图片
  //file图片文件(必选)
  //maxWidth限制宽度(必选)
  //maxHeight限制高度(可选)
  //callback压缩完成回调方法(可选)
  compress(file, maxWidth, maxHeight, callback) {    //接收传过来的图片
    var that = this;
    //获取原图片信息
    wx.getImageInfo({
      src: file,
      success: function (res) {
        var width = res.width, height = res.height;
        if (width > maxWidth) {
          //超出限制宽度
          height = (maxWidth / width) * height;
          width = parseInt(maxWidth);
        }
        if (res.height > maxHeight && maxHeight) {
          //超出限制高度
          var ratio = that.data.thumbHeight / res.height;//计算比例
          width = (maxHeight / height) * width.toFixed(2);
          height = maxHeight.toFixed(2);
        }

        that.setData({ thumbWidth: width, thumbHeight: height });

        //按比例压缩图片
        const ctx = wx.createCanvasContext('firstCanvas');
        ctx.drawImage(file, 0, 0, width, height);
        ctx.draw(false, function () {
          //绘画完成回调
          //生成图片
          wx.canvasToTempFilePath({
            canvasId: 'firstCanvas',
            success: function (res) {
              typeof callback == "function" && callback(res);
            }
          })
        });
      }
    })
  },
})