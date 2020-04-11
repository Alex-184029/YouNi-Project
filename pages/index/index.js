//index.js
//获取应用实例
const app = getApp()

Page({
  wwjh:function(){
    wx.navigateTo({
      url: '../index/wwjh'
    })
    },
   zygx:function () {
    wx.navigateTo({
      url: '../index/zygx'
    })
  },
   tsjy: function () {
    wx.navigateTo({
      url: '../index/tsjy'
    })
  },
  onPullDownRefresh(){
    wx.stopPullDownRefresh()
  }
})
