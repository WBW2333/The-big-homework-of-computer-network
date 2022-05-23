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
    onLoad: function () {
        this.request_all('all', '0000')
        this.sor()
        this.cal()
        this.make_pie()
        this.info()
    },
    data: {
        isShowSelect: true,
        isShowSelectChart: true,
        dataList: [
            {key: 0, value: '支出'},
            {key: 1, value: '收入'}
        ],
        kind: 0,
        tot: [0, 0],
        chart_type_name: ['圆饼图', '折线图', '柱状图'],
        chart_type: 0,
        use_data: [],
        tot_data: [
        {
            'id': 1,
            'type': 0,
            'category': '餐饮',
            'note': '黄焖鸡',
            'amount': 20,
            'date': '2022/05/17',
            'userid': '0000'
        },
        {
            'id': 1,
            'type': 1,
            'category': '餐饮',
            'note': '黄焖鸡',
            'amount': 20,
            'date': '2022/01/17',
            'userid': '0000'
        },
        {
            'id': 1,
            'type': 0,
            'category': '餐饮',
            'note': '黄焖鸡',
            'amount': 20,
            'date': '2020/05/17',
            'userid': '0000'
        },
        {
            'id': 1,
            'type': 0,
            'category': '餐饮',
            'note': '黄焖鸡',
            'amount': 19,
            'date': '2022/05/17',
            'userid': '0000'
        },
        {
            'id': 1,
            'type': 0,
            'category': '饮料',
            'note': '黄焖鸡',
            'amount': 8,
            'date': '2022/05/17',
            'userid': '0000'
        },
        {
            'id': 2,
            'type': 0,
            'category': '购物',
            'note': '零食',
            'amount': 11.5,
            'date': '2022/05/11',
            'userid': '0000'
        },
        {
            'id': 3,
            'type': 1,
            'category': '捡钱',
            'note': null,
            'amount': 10,
            'date': '2022/05/03',
            'userid': '0000'
        },
        {
            'id': 3,
            'type': 1,
            'category': '工资',
            'note': null,
            'amount': 100,
            'date': '2022/05/05',
            'userid': '0000'
        },
        {
            'id': 4,
            'type': 0,
            'category': '吃饭',
            'note': null,
            'amount': 100,
            'date': '2022/05/05',
            'userid': '0000'
        },
        {
            'id': 3,
            'type': 0,
            'category': '购物',
            'note': null,
            'amount': 18,
            'date': '2022/06/03',
            'userid': '0000'
        }
        ],
        come: [[], []],  //分别储存收入和支出的总额，按种类分条记录
    },
    sor: function (){
        this.data.tot_data.sort(cmp)
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
    select: function (item, index) {
        this.setData({
            isShowSelect: !this.data.isShowSelect,
            kind: item.currentTarget.dataset.index
        })
        if(this.data.chart_type == 0){
            this.make_pie()
        }
        else if(this.data.chart_type == 1){
            this.make_line()
        }
        else{
            this.make_column()
        }
    },
    select_chart: function (item, index) {
        this.setData({
            isShowSelectChart: !this.data.isShowSelectChart,
            chart_type: item.currentTarget.dataset.index
        })
        if(this.data.chart_type == 0){
            this.make_pie()
        }
        else if(this.data.chart_type == 1){
            this.make_line()
        }
        else{
            this.make_column()
        }
    },
    display_chart_box: function (e) {
        this.setData({
            isShowSelectChart: !this.data.isShowSelectChart
        })
    },
    display_box: function (e) {
        this.setData({
            isShowSelect: !this.data.isShowSelect
        })
    },
    make_pie: function () {
        new Charts({
            canvasId: 'Canvas',
            type: 'pie',
            series: this.data.come[this.data.kind],
            width: wx.getSystemInfoSync().windowWidth,
            height: 300,
            dataLabel: true
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

        new Charts({
            canvasId: 'Canvas',
            type: 'line',
            categories: time,
            series: [{ // 数据列表
                name: this.data.dataList[this.data.kind].value,
                data: linedate
            }],
            yAxis: {
                min: 0
            },
            width: 300,
            height:250,
            dataLabel: true, // 是否在图表中显示数据内容值
            legend: false, // 是否显示图表下方各类别的标识
        })
    },
    make_column: function (){
        let cate = []
        let coldata = []
        for(let i in this.data.come[this.data.kind]){
            console.log(this.data.come[this.data.kind][i])
            cate.push(this.data.come[this.data.kind][i].name)
            coldata.push(this.data.come[this.data.kind][i].data)
        }
        console.log(cate)
        console.log(coldata)
        new Charts({
            canvasId: 'Canvas',
            type: 'column',
            categories: cate,
            series: [{
              name: this.data.dataList[this.data.kind].value,
              data: coldata
            }],
            yAxis: {
              format: function (val) {
                return val;
              },
              min: 0
            },
            width: 300,
            height:250
          })
          console.log(this.data.chart_type)
    },
    request_all: function (type, user) {
        var that = this
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
            console.log(res.data)
            if (res.statusCode == 200) {
              var array = res.data
            //   console.log(array)
              that.setData({
                listDate: res.data,
                tot_data: res.data
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
    },
    info(){
        wx.getUserInfo({
            //成功后会返回
            success:(res)=>{
            console.log(res);
            // 把你的用户信息存到一个变量中方便下面使用
            let userInfo= res.userInfo
            console.log(userInfo)
            //获取openId（需要code来换取）这是用户的唯一标识符
            // 获取code值
            wx.login({
                //成功放回
                success:(res)=>{
                console.log(res);
                let code=res.code
                // 通过code换取openId
                wx.request({
                    url: `https://api.weixin.qq.com/sns/jscode2session?appid=wx135c3f75b6a98682&secret=d3d6bb6e5aac3c1a60e722dbe5157a5f&js_code=${code}&grant_type=authorization_code`,
                    success:(res)=>{
                    console.log(res);
                    userInfo.openid=res.data.openid
                    console.log(userInfo.openid);
                    }
                })
                }
            })

            }
        })
    }    
})