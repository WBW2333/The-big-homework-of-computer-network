// index.js
// 获取应用实例
const app = getApp()

Page({
    onShow: function onShow(option) {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
            selected: 2   // 根据tab的索引值设置
        })  
    }
},
  data: {
    isIncome:false,
    keyBoard:0,
  },
  // 事件处理函数
  bindViewTap(e) {
    let theme=e.currentTarget.dataset.theme;
    var name=encodeURIComponent(theme);
    var income=encodeURIComponent(this.data.isIncome);
    
    wx.navigateTo({
      url: `/pages/detail/main?name=${name}&income=${income}`,
    })
    
    
   var count=this.data.keyBoard+1;
    this.setData({
      keyBoard:count,
    })
    //console.log(count)
  },
  clickIncome:function(){
    this.setData({
      isIncome:true,
    })
  },
  clickOutput:function(){
    this.setData({
      isIncome:false,
    })
  },
  onLoad() {

  },
})
