// detail.js
// 获取应用实例
const app = getApp()

//获取年月日
const date = new Date()
const nowYear = date.getFullYear()
const nowMonth = date.getMonth()+1
const nowDay = date.getDate()
let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
// 根据年月 获取当月的总天数
let getDays = function (year, month) {
    //console.log(year, month);
    if (month === 2) {
        return ((year % 4 === 0) && ((year % 100) !== 0)) || (year % 400 === 0) ? 29 : 28
    } else {
        return daysInMonth[month - 1]
    }
}
// 根据年月日设置当前月有多少天 并更新年月日数组
let setDate = function (year, month, day, _th) {
    let daysNum = year === nowYear && month === nowMonth ? nowDay : getDays(year, month)
    day = day > daysNum ? 1 : day
    let monthsNum = year === nowYear ? nowMonth : 12
    let years = []
    let months = []
    let days = []
    let yearIdx = 9999
    let monthIdx = 0
    let dayIdx = 0
 
    // 重新设置年份列表
    for (let i = 1950; i <= nowYear; i++) {
        years.push(i)
    }
    years.map((v, idx) => {
        if (v === year) {
            yearIdx = idx
        }
    })
    // 重新设置月份列表
    for (let i = 1; i <= monthsNum; i++) {
        months.push(i)
    }
    months.map((v, idx) => {
        if (v === month) {
            monthIdx = idx
        }
    })
    // 重新设置日期列表
    for (let i = 1; i <= daysNum; i++) {
        days.push(i)
    }
    days.map((v, idx) => {
        if (v === day) {
            dayIdx = idx
        }
    })
 
    _th.setData({
        years: years, //年份列表
        months: months, //月份列表
        days: days, //日期列表
        value: [yearIdx, monthIdx, dayIdx],
        year: year,
        month: month,
        day: day
    })
}
Page({
  data: {
    theme:'',
    years: [],
    months: [],
    days: [],
    year: nowYear,
    month: nowMonth,
    day: nowDay,
    value: [9999, 1, 1],
    record:{
      type:'',
      form:'',
      note:'',
      amount:'',
      date:''
    },
    openid:'',
    maxlength:50,//通过maxlength属性限制输入两位小数
  },
  onLoad: function(options) {
    let that = this
    wx.getStorage({
        key: 'userinfo',
        success (res) {
        //   console.log(res.data)
          console.log(res.data.openid)
          that.setData({
            openid: res.data.openid
          })
        }
    })
    var name=decodeURIComponent(options.name);
    this.data.record.form=name;
    var isIncome=decodeURIComponent(options.income);
    if(isIncome == "true"){
        this.data.record.type=1;
    }else{
      this.data.record.type=0;
    }
    this.setData({
      theme:name,
      record:this.data.record,
    })
    setDate(this.data.year, this.data.month, this.data.day, this)
  },
  bindChange: function (e) {
    let val = e.detail.value;
    setDate(this.data.years[val[0]], this.data.months[val[1]], this.data.days[val[2]], this);
    this.data.record.date=this.data.years[val[0]]+"/"+this.data.months[val[1]]+"/"+this.data.days[val[2]];
  },
  getAmount:function(e){
    let price = e.detail.value;
    let maxlength = price.indexOf('.') + 3;
    if(maxlength == 2){
      maxlength = 50;
    }
    this.setData({
      maxlength:maxlength,
      'record.amount':price
    })
  },
  getNote:function(e){
    this.data.record.note=e.detail.value;
    this.setData({
      record:this.data.record
    })
  },
  compelete:function(){
    var yyyy=this.data.year+'';
    var mm=this.data.month+'';
    var dd=this.data.day+'';
    var d=yyyy+"/"+mm+"/"+dd;
    
    if(this.data.record.date==''){
      this.data.record.date=d;
    }
    this.setData({
      record:this.data.record,
    })
    var isNumber=Number(this.data.record.amount);
    if(this.data.record.amount!=''&&(!isNaN(isNumber))){
      console.log(this.data.record);
      wx.request({
        url: 'https://cost-recorder-back-1930956-1311933639.ap-shanghai.run.tcloudbase.com/api/account/add',
        data:  {
          "type":this.data.record.type,
          "category":this.data.record.form,
          "note":this.data.record.note,
          "amount":Number(this.data.record.amount),
          "date":this.data.record.date,
          "userid":this.data.openid,
        },
        method: 'POST',
        success: function(res){
          console.log(res.data)
          console.log("toRed success");
          console.log(res.data.msg);
          if(res.data.msg == 'Success!'){
              wx.reLaunch({
                url: '../index/main',
                success (res) {
                    console.log(res)
                }
              })
          }
        },
        fail: function(res) {
          console.log("toRed fail:");
        },
      })
      wx.navigateBack({});
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 1500
      })
    }else{
      wx.showModal({
        cancelColor: 'cancelColor',
        title: '提示',
        content: '金额不能为空,金额必须是数字',
        confirmText: '好的',
        showCancel:true,
        confirmColor: '#000000'	
      })  
    }
  }
})
