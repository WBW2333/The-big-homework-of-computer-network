// index.js
// 获取应用实例
const app = getApp()

App({
})

var Charts = require('./dist/wxcharts-min.js')
var wxChart = null
var cmp = function (x, y) {
    return x['date'] < y['date'] ? -1 : 1
}
Page({
    onShow: function () {
        var that = this
        that.getTabBar().setData({
            selected: 1
        })
        wx.getStorage({
            'key': 'userinfo',
            success: function (res) {
                console.log(res)
                that.request_all('all', res.data.openid)
            }
        })
        // var that = this
        // that.sor()
        // that.cal()
        // that.make_pie()
    },
    data: {
        bill_is_show: [false, false],
        isShowSelect: true,
        recentlyDay: 7,
        isShowSelectChart: true,
        dataList: [
            {key: 0, value: '支出'},
            {key: 1, value: '收入'}
        ],
        chart_height: 200,
        chart_width: 300,
        kind: 0,
        tot: [0, 0],
        chart_type_name: ['圆饼图', '折线图', '柱状图'],
        chart_type: 0,
        tot_data: [],
        bill_is_show: [false, false],
        come: [[], []]  //分别储存收入和支出的总额，按种类分条记录
    },
    sor: function (){
        this.data.tot_data.sort(cmp)
        console.log(this.data.tot_data)
        // console.log(this.data.tot_data)
    },
    cal: function () {
        for(let i = 0; i < this.data.tot_data.length; i++){
            var b = 0
            for(let it in this.data.come[this.data.tot_data[i].type]){
                if (this.data.come[this.data.tot_data[i].type][it].name === this.data.tot_data[i].category) {
                    b = 1
                    this.data.come[this.data.tot_data[i].type][it].data += this.data.tot_data[i].amount
                }
            }
            if (b === 0) {
                let use = {
                    'name': this.data.tot_data[i].category,
                    'data': this.data.tot_data[i].amount
                };
                (this.data.come[this.data.tot_data[i].type]).push(use)
            }
            this.data.tot[this.data.tot_data[i].type] += this.data.tot_data[i].amount
            // console.log(this.data.come)
        }
        this.setData({
            tot: this.data.tot,
            come: this.data.come
        })
    },
    select_chart: function (item, index) {
        this.setData({
            chart_type: item.currentTarget.dataset.index
        })
        if(this.data.bill_is_show[this.data.kind]){
            if(this.data.chart_type == 0){
                this.make_pie()
            }
            else if(this.data.chart_type == 1){
                this.make_line()
            }
            else{
                this.make_column()
            }
        }
    },
    display_box: function (e) {
        this.setData({
            kind: this.data.kind === 0 ? 1 : 0
        })
        if(this.data.bill_is_show[this.data.kind]){
            if(this.data.chart_type == 0){
                this.make_pie()
            }
            else if(this.data.chart_type == 1){
                this.make_line()
            }
            else{
                this.make_column()
            }
        }
    },
    make_pie: function () {
        console.log(this.data.tot_data)
        new Charts({
            canvasId: 'Canvas',
            type: 'pie',
            series: this.data.come[this.data.kind],
            width: wx.getSystemInfoSync().windowWidth/1.5,
            height: wx.getSystemInfoSync().windowWidth/1.5,
            dataLabel: true,
            disablePieStroke: true
        })
    },
    make_line: function () {
        let time = []
        let linedate = []

        for(let i = 0; i < this.data.tot_data.length; i++){
            if(this.data.tot_data[i].type != this.data.kind){
                continue
            }
            var b = -1
            for(let j = 0; j < time.length; j++){
                if(time[j] == this.data.tot_data[i].date){
                    b = j
                }
            }
            if(b == -1){
                time.push(this.data.tot_data[i].date)
                linedate.push(this.data.tot_data[i].amount)
            }
            else{
                linedate[b] += this.data.tot_data[i].amount
            }
        }
        linedate = linedate.slice(-this.data.recentlyDay, linedate.length)
        time = time.slice(-this.data.recentlyDay, linedate.length)

        new Charts({
            canvasId: 'Canvas',
            type: 'line',
            categories: time,
            series: [{ // 数据列表
                name: this.data.dataList[this.data.kind].value,
                data: linedate,
                color: 'rgb(260, 200, 60)'
            }],
            yAxis: {
                min: 0
                // gridColor: 'rgb(260, 200, 60)'
            },
            xAxis: {
                gridColor: 'rgb(260, 200, 60)'
            },
            width: wx.getSystemInfoSync().windowWidth/1.5,
            height: wx.getSystemInfoSync().windowWidth/1.5,
            dataLabel: true, // 是否在图表中显示数据内容值
            legend: false, // 是否显示图表下方各类别的标识
        })
    },
    make_column: function (){
        let cate = []
        let coldata = []
        for(let i in this.data.come[this.data.kind]){
            // console.log(this.data.come[this.data.kind][i])
            cate.push(this.data.come[this.data.kind][i].name)
            coldata.push(this.data.come[this.data.kind][i].data)
            // coldata.push(this.data.come[this.data.kind][i].data)
        }
        cate = cate.slice(-this.data.recentlyDay, cate.length)
        coldata = coldata.slice(-this.data.recentlyDay, coldata.length)
        new Charts({
            canvasId: 'Canvas',
            type: 'column',
            categories: cate,
            series: [{
              name: this.data.dataList[this.data.kind].value,
              data: coldata,
              color: 'rgb(260, 200, 60)'
            }],
            yAxis: {
              format: function (val) {
                return val;
              },
              min: 0
            },
            width: wx.getSystemInfoSync().windowWidth/1.5,
            height: wx.getSystemInfoSync().windowWidth/1.5
          })
    },
    request_all: function (type, user) {
        var that = this
        console.log(user)
        wx.request({
        // 注意，如果小程序开启校验合法域名时必须使用https协议
        //在测试的情况下可以不开启域名校验
        url: 'https://cost-recorder-back-1930956-1311933639.ap-shanghai.run.tcloudbase.com/api/account/' + type,
        data: {
            userid: user
        },
        method: 'GET',
        header: {
                'content-type': 'application/json'
            },
        success: function (res) {
            // console.log(res.data)
            // console.log(that.data.tot_data)
            if(res.data.length !== 0){
                that.setData({
                    tot: [0, 0],
                    tot_data: [],
                    bill_is_show: [false, false],
                    come: [[], []]
                })
                that.data.tot_data = res.data
                if (res.statusCode === 200) {
                    that.setData({
                        listDate: res.data,
                        tot_data: res.data
                    })
                }
                // console.log(that.data.tot_data)
                that.sor()
                that.cal()
                // console.log(that.data.come[0].length)
                // console.log(that.data.come[1].length)
                if(that.data.come[0].length != 0){
                    if(that.data.kind === 0){
                        that.make_pie()
                    }
                    that.setData({
                        bill_is_show: [true, that.data.bill_is_show[1]]
                    })
                }
                if(that.data.come[1].length > 0){
                    if(that.data.kind === 1){
                        that.make_pie()
                    }
                    that.setData({
                        bill_is_show: [that.data.bill_is_show[0], true]
                    })
                }
                // console.log(that.data.bill_is_show)
            }
            else{
                that.setData({
                    bill_is_show: [false, false],
                })
            }
        },
        fail: function () {
            wx.showToast({
                icon: "none",
                mask: true,
                title: "接口调用失败，请稍后再试。",
            });
        }
        })
    }
})