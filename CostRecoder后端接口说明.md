# CostRecoder后端接口说明

## 后端部署地址

<https://cost-recorder-back-1930956-1311933639.ap-shanghai.run.tcloudbase.com/>

## 后端API

| API | HTTP方法 | 参数 | 说明 | 状态 |
| :- | :- | :- | :- | :- |
| api/login | GET | code | 验证用户登录 | 可用 |
| api/account/add | POST | {} | 输入json格式添加账目，包括userid、type、category、note（可缺少）、amount、date（格式yyyy/MM/dd） | 可用 |
| api/account/all | GET | userid | 查询userid用户的所有账目，返回json格式，返回格式 | 可用 |
| api/account/type | GET | userid, type | 查询userid用户的支出或收入账目,0代表支出，1代表收入 | 可用 |
| api/account/category | GET | userid, category | 查询userid用户的特定种类的账单 | 可用 |
| api/account/date | GET | userid, startDate, endDate | 查询两日期之间的userid用户的账目 | 可用 |

附：后端返回JSON格式

```JSON
[
    {
        "id": 1,
        "type": 0,
        "category": "餐饮",
        "note": "黄焖鸡",
        "amount": 20,
        "date": "2022/05/17",
        "userid": "0000"
    },
    {
        "id": 2,
        "type": 0,
        "category": "购物",
        "note": "零食",
        "amount": 11.5,
        "date": "2022/05/11",
        "userid": "0000"
    },
    {
        "id": 3,
        "type": 1,
        "category": "捡钱",
        "note": null,
        "amount": 10,
        "date": "2022/05/03",
        "userid": "0000"
    }
]
```

## 后端调用方法

```javaScript
test() {
    var that = this
    wx.request({
        // 注意，如果小程序开启校验合法域名时必须使用https协议
        //在测试的情况下可以不开启域名校验
        url: 'https://cost-recorder-back-1930956-1311933639.ap-shanghai.run.tcloudbase.com/api/account/add',
        data: {
            // 接口设置的固定参数值
            "type": 0,
            "category": "test",
            "amount": 61,
            "date": "1993/07/26",
            "userid": "0000",
            "note": ""
        },
        // 请求的方法
        method: 'POST', // 或 ‘GET’
        // 设置请求头，不能设置 Referer
        header: {
            'content-type': 'application/json' // 默认值
        },
        // 请求成功时的处理
        success: function (res) {
            // 一般在这一打印下看看是否拿到数据
            console.log(res.data)
            if (res.statusCode == 200) {
                var array = res.data
                that.setData({
                // 将res.data保存在listDate方便我们去循环遍历
                listDate: res.data,
                // 统计所有数据
                deviceNum: array.length
                })
            }
        },
        // 请求失败时的一些处理
        fail: function () {
            wx.showToast({
                icon: "none",
                mask: true,
                title: "接口调用失败，请稍后再试。",
            });
        }
    })
},
```

注意：

1. 打开微信开发者工具中“不校验合法域名、web-view（业务域名）、TLS版本以及HTTPS证书”选项，位置：右上角详情->本地设置。

2. 像接口传递参数时，参数名用用双引号包起来。

3. 注意接口接收的数据类型，详见数据库格式。

## 数据库格式

| 属性 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 账目编号，主键，自增 |
| type | int | 账目类型：0代表支出，1代表收入 |
| category | string | 账目种类：如餐饮，购物，工资等 |
| note | string | 账目备注 |
| amount | double | 账目金额 |
| date | date | 账目日期，格式yyyy/MM/dd |
| userid | string | 传入用户的openid作为用户唯一识别符 |
