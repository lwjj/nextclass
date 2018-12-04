// pages/createUser/createUser.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headImg:''

  },
  toNextStep: function () {
    wx.navigateTo({
      url: '/pages/createUser2/createUser2',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  chooseImageTap: function (e) {
    let _this = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#07ce07",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            _this.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            _this.chooseWxImage('camera')
          }
        }
      }
    })
  },
  chooseWxImage: function (type) {
    let _this = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        console.log(res, 'img');
        
        _this.setData({          
          headImg: res.tempFilePaths,
        })
        
      }
    })
  },
})