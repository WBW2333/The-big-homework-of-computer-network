后端部署地址
https://cost-recorder-back-1930956-1311933639.ap-shanghai.run.tcloudbase.com/

后端API

| API | 参数 | 说明 | 状态 |
| :- | :- | :- | :- |
| api/login | null | 验证用户登录 | 测试中 |
| api/account/add | | | 开发中 |
| api/account/all | userid | 查询用户的所有账目 | 可用 |
| api/account/type | userid, type | 0代表支出，1代表收入 | 可用 |
| api/account/category | userid, category | 以账单种类查询 | 可用 |
| api/account/date | userid, startDate, endDate | 查询两日期中的账目 | 可用 |

数据库结构
| 列名 | 类型 | 说明 |
| :- | :- | :- |
| type | int | 账目类型：0代表收入，1代表支出|
| category | varchar | 账目种类：如餐饮，购物，工资等|
| desc | longtext | 账目备注|
| amount | float | 账目金额|
| date | date | 账目日期 |
| userid | int | 传入用户的openid作为用户唯一识别符 |
