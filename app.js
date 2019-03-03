//1:加载模块 express pool
const express = require("express");
const pool = require("./pool");
//2:创建express对象
var app = express();
//2.1:加载跨域访问组件
const cors = require("cors");
//2.2:配置允许脚手架访问程序
app.use(cors({
    origin:["http://127.0.0.1:3001",
    "http://localhost:3001",
    "http://localhost:8087"],
    credentials:true
}));
//7.1:node.js app.js
//   加载第三方模块 express-session
const session = require("express-session")
//7.2:对模块配置   
app.use(session({
  secret:"128位随机字符",    //安全字符串
  resave:false,             //请求保存
  saveUninitialized:true,   //初始化保存
  cookie:{
    maxAge:1000 * 60 * 60 * 24 
  }
}));

//引入第三方模块:bodyParser 处理post请求
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended:false
}));

//3:指定监听端口3000
app.listen(3000);
console.log("测试服务器启动")
//4:指定静态目录 public
// __dirname 当前程序所属目录绝对路径 
//app.js vue_app_server
app.use(express.static(__dirname+"/public"))



//产品-获取基金产品详情
app.get("/api/home/product/product_detail",(req,res)=>{
  if(req.query.product_id){
    res.send({
      "message":"查询成功",
      "data":{
          "id":1,
          "product_name":"测试产品1",
          "financing_total":"1000.00",
          "invest_term":365,
          "start_invest":"100.00",
          "raise_start_at":"2019-01-29",
          "raise_end_at":"2019-01-31",
          "option":"R1",
          "iuss_name":"德美基金",
          "product_type":"私募证券投资基金",
          "income_intro":"测试产品1",
          "product_recommend":"['7','8']",
          "trusteeship":null,
          "company_name":"德美基金公司"
      }
  });
  }
});

//产品-获取收益明细
app.get("/api/home/user/product/profit_detail",(req,res)=>{
  if(req.query.page && req.query.limit){
    res.send({
      "message": "查询成功",
      "data": {
          "data": [
              {
                  "id": 1,
                  "name": "测试产品1",
                  "money": "100000.00",
                  "income": 0
              }
          ],
          "links": {
              "first": "http://www.demei.com/api/home/user/product/profit_detail?page=1",
              "last": "http://www.demei.com/api/home/user/product/profit_detail?page=1",
              "prev": null,
              "next": null
          },
          "meta": {
              "current_page": 1,
              "from": 1,
              "last_page": 1,
              "path": "http://www.demei.com/api/home/user/product/profit_detail",
              "per_page": "10",
              "to": 1,
              "total": 1
          },
          "year_income": 0, //今年收益
          "total_income": 0 // 总计收益
      }
  });
  }
});

//回访管理-回访列表
app.get("/api/home/user/returns/returns_list",(req,res)=>{
  if(req.query.page && req.query.limit && req.query.mode){
    if(req.query.mode==1){
      var product_name = "测试产品mode1"
    }else if(req.query.mode==2){
      var product_name = "测试产品mode2"
    }
    res.send({
      "message": "查询成功",
      "data": {
          "current_page": 1,
          "data": [
              {
                  "id": 1,
                  "product_name": `${product_name}`,
                  "fund_share": 100000,
                  "money": "100000.00",
                  "invest_term": 365
              },{
                "id": 2,
                "product_name": `${product_name}`,
                "fund_share": 100000,
                "money": "100000.00",
                "invest_term": 365
            }
          ],
          "first_page_url": "http://www.demei.com/api/home/user/returns/returns_list?page=1",
          "from": 1,
          "last_page": 1,
          "last_page_url": "http://www.demei.com/api/home/user/returns/returns_list?page=1",
          "next_page_url": null,
          "path": "http://www.demei.com/api/home/user/returns/returns_list",
          "per_page": "1",
          "prev_page_url": null,
          "to": 1,
          "total": 1
      }
  });
}
});

//回访管理-回访列表
app.get("/api/home/user/returns/returns_list",(req,res)=>{
  if(req.query.page && req.query.limit && req.query.mode){
    if(req.query.mode==1){
      var product_name = "测试产品mode1"
    }else if(req.query.mode==2){
      var product_name = "测试产品mode2"
    }
    res.send({
      "message": {
          "current_page": 1,
          "first_page_url": "http://www.demei.com/api/home/user/newsLists?page=1",
          "from": 1,
          "last_page": 1,
          "last_page_url": "http://www.demei.com/api/home/user/newsLists?page=1",
          "next_page_url": null,
          "path": "http://www.demei.com/api/home/user/newsLists",
          "per_page": "10",
          "prev_page_url": null,
          "to": 2,
          "total": 2,// 总条数
          "data": [
              {
                  "id": "080cb761-0fdb-4c36-993a-07f6c19b9516",
                  "read_time": null,
                  "news": {
                      "id": "080cb761-0fdb-4c36-993a-07f6c19b9516",
                      "title": "测试信息",
                      "content": "测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息",
                      "send_time": "2019-01-31 07:08:52"
                  }
              },
              {
                  "id": "8bff38a9-98ff-4aca-936c-bca7cda4846c",
                  "read_time": null,
                  "news": {
                      "id": "8bff38a9-98ff-4aca-936c-bca7cda4846c",
                      "title": "测试信息",
                      "content": "测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息",
                      "send_time": "2019-01-31 07:07:29"
                  }
              }
          ]
      },
      "data": ""
  });
}
});

//基金管理首页
app.get("/api/home/user/product/lists",(req,res)=>{
  if(req.query.page && req.query.limit){
    res.send({
      "message": "查询成功",
      "data": {
          "data": [
              {
                  "id": 1, //用户购买基金产品id
                  "name": "测试产品1", // 基金产品名称
                  "money": "100000.00", //投资基金 单位万元
                  "scale": "1.0", //投资占比 单位%
                  "surplus_day": 350 //剩余天数
              }
          ],
          "links": {
              "first": "http://www.demei.com/api/home/user/product/lists?page=1",
              "last": "http://www.demei.com/api/home/user/product/lists?page=1",
              "prev": null,
              "next": null
          },
          "meta": {
              "current_page": 1,
              "from": 1,
              "last_page": 1,
              "path": "http://www.demei.com/api/home/user/product/lists",
              "per_page": "10",
              "to": 1,
              "total": 1
          },
          "holding_amount": 100000, //持有投资 单位万元
          "accumulative_total": "100000.00", // 累计投资 单位万元
          "year_income":2.2, //今年收益
          "total_income" : 2.27 // 总计收益
      }
  });
}
});

//基金详情
app.get("/api/home/user/product/detail",(req,res)=>{
  if(true){
    res.send();
}
});

//业绩走势
app.get("/api/home/user/product/performance",(req,res)=>{
  if(req.query.id){
    res.send({
      "message": "查询成功",
      "data": {
          "data1": [
              0,
              0,
              1.25,
              3,
              -1.01,
              0
          ],
          "times": [
              "2018-09",
              "2018-10",
              "2018-11",
              "2018-12",
              "2019-01",
              "2019-02"
          ]
      }
  });
}
});

//业绩走势
app.get("/api/home/user/product/agreement",(req,res)=>{
  if(true){
    res.send({
      "message": "查询成功",
      "data": "<p>基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议基金转让协议</p>"
  });
}
});



// app.post("/addComment",(req,res)=>{
//   //1:获取3个参数
//   //需要第三方模块支持 bodyParser
//   var nid = req.body.nid;
//   var content = req.body.content;
//   var user_name = req.session.uname;
//   //2:创建sql语句
//   var sql  =" INSERT INTO `xz_comment`(`id`,";
//       sql +=" `nid`, `user_name`, `ctime`,";
//       sql +=" `content`) VALUES";
//       sql +=" (null,?,?,now(),?)";
//   nid = parseInt(nid);
//   pool.query(sql,[nid,user_name,content],(err,result)=>{
//        if(err)throw err;
//        res.send({code:1,msg:"评论发表成功"});
//   });
//   //3:返回添加结果
// })
















