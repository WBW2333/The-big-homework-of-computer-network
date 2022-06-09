Component({
    data: {
        tabbarCSS: "flex: 1; position: fixed; text-align: center; display: flex; justify-content: center; align-items: center; flex-direction: column; width: 100rpx; height: 100rpx;",
      show_tabbar: true,
      selected: 0,
      color: "#7A7E83",
      selectedColor: "#666666",
      fontWeight:'bold',
      list: [
        {
            "text": "账单",
            "pagePath": "../index/main",
            "iconPath": "../static/tabs/orders.png",
            "selectedIconPath": "../static/tabs/orders-active.png",
            "selected": false,
            isSpecial: false
        },
        {
            "text": "图表",
            "pagePath": "../chart/index",
            "iconPath": "../static/tabs/chart.png",
            "selectedIconPath": "../static/tabs/chart-active.png",
            "selected": false,
            isSpecial: false
        },
        {
            "text": "记账",
            "pagePath": "../add/main",
            "iconPath": "../static/tabs/add.png",
            "selectedIconPath": "../static/tabs/add.png",
            isSpecial: false
        },
        {
            "text": "用户",
            "pagePath": "../user_center/main",
            "iconPath": "../static/tabs/user.png",
            "selectedIconPath": "../static/tabs/user-active.png",
            "selected": false,
            isSpecial: false
        }
    ]
    },
    attached() {
    },
    methods: {
      switchTab(e) {
        const idx = e.currentTarget.dataset.index
        const path = e.currentTarget.dataset.path
        // this.setData({
        //   selected: idx
        // })
        wx.switchTab({
            url: path,
        })
        console.log(this.data.selected, idx);
      }
    }
  })
