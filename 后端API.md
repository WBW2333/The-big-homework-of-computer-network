后端部署地址
https://cost-recorder-back-1930956-1311933639.ap-shanghai.run.tcloudbase.com/

后端API

| API | HTTP方法 | 参数 | 说明 | 状态 |
| :- | :- | :- | :- | :- |
| api/login | GET | code | 验证用户登录 | 可用 |
| api/account/add | POST | {} | 输入json格式添加账目，包括userid,type,category,note(可缺少),amount,date(格式yyyy/MM/dd) | 可用 |
| api/account/all | GET | userid | 查询userid用户的所有账目 | 可用 |
| api/account/type | GET | userid, type | 查询userid用户的支出或收入账目,0代表支出，1代表收入 | 可用 |
| api/account/category | GET | userid, category | 查询userid用户的特定种类的账单 | 可用 |
| api/account/date | GET | userid, startDate, endDate | 查询两日期之间的userid用户的账目 | 可用 |

返回JSON格式结构
| 属性 | 类型 | 说明 |
| :- | :- | :- |
| type | int | 账目类型：0代表支出，1代表收入|
| category | string | 账目种类：如餐饮，购物，工资等|
| note | string | 账目备注|
| amount | doubble | 账目金额|
| date | date | 账目日期 |
| userid | int | 传入用户的openid作为用户唯一识别符 |
