// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal2:false,
    userInfo:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  showDialogBtn2: function () {
    console.log(111)
    this.setData({
      showModal2: true
    })
  },
  hideDialog: function () {
    this.setData({
      showModal2: false
    })
  },
  bindGetUserInfo:function(){
    var _this=this;
    wx.getUserInfo({
      withCredentials: true,
      success: function(res) {
        console.log(res,'res')
        _this.setData({
          userInfo:res.userInfo,
          showModal2: false
        })
      },
      fail: function(res) {},
     
    })
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})