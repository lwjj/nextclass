//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showModal: false,
    showModal2:false
  },
  onLoad: function () {
    this.showDialogBtn()
    
  },
  /**
   * 弹窗
   */
  showDialogBtn: function () {
    this.setData({
      showModal: true
    })
  },
  showDialogBtn2: function () {
    console.log(111)
    this.setData({
      showModal: false,
      showModal2: true
    })
  },
  toCreateAccount:function(){
    wx.navigateTo({
      url: '/pages/createUser/createUser',
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    this.hideModal();
  }

})
