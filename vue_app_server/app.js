//app.js
//1:加载模块
const express = require("express");
const pool  = require("./pool");
//2:创建express对象
var app = express();
//服务器node.js 允许跨域访问配置项
//2.1:引入跨域模块   
const cors = require("cors");
//2.2:配置允许哪个程序跨域访问 脚手架 
app.use(cors({
  origin:[
    "http://127.0.0.1:3001","http://localhost:4200"],
  credentials:true
}))

//3:指定静态目录
//服务器指定目录 绝对路径 出错
app.use(express.static(__dirname+"/public"));

//4:绑定监听端口
app.listen(3000);
//功能一:艾吉贝商城首页图片轮播
//GET /imagelist   json
//斜挎包
app.get("/img_splist",(req,res)=>{
  var obj = [
 {id:1,imgurl:"http://127.0.0.1:3000/img/d2cd16e6-71f0-4c42-b57e-30e417e8a28f.jpg"},
 {id:2,imgurl:"http://127.0.0.1:3000/img/78743cc9-5d29-4289-b0a1-0d5df79e63c7.jpg"},
 {id:3,imgurl:"http://127.0.0.1:3000/img/1c9cc5cf-4ef5-4474-b4ae-7b2f1efa88f0.jpg"},
 {id:4,imgurl:"http://127.0.0.1:3000/img/01de5ef6-3763-4cfe-bda8-c412266e14c7.jpg"}
];
  res.send(obj)
});

//风衣
app.get("/img_fy_list",(req,res)=>{
  var obj = [
 {id:1,imgurl:"http://127.0.0.1:3000/img/p=0.jpg"},
 {id:2,imgurl:"http://127.0.0.1:3000/img/gp=0.jpg"},
 {id:3,imgurl:"http://127.0.0.1:3000/img/&gp=0.jpg"}
];
  res.send(obj)
});
//轮播图
app.get("/imagelist",(req,res)=>{
  var obj = [
 {id:1,img_url:"http://127.0.0.1:3000/img/views_files1.jpg"},
 {id:2,img_url:"http://127.0.0.1:3000/img/views_files2.jpg"},
 {id:3,img_url:"http://127.0.0.1:3000/img/views_files3.jpg"},
];
  res.send(obj)
});


//分页显示:新闻分页
app.get("/newslist",(req,res)=>{
  //1:参数  当前页码  页大小(一页显示几行数据)
  var pno = req.query.pno;            //2
  var pageSize = req.query.pageSize;  //5
  //2:sql
  //2.1:查找总记录数->转换总页数  15->3
  var sql = "SELECT count(id) as c FROM xz_newss";


  var obj = {};      //保存发送客户端数据
  var progress = 0;  //进度
  pool.query(sql,(err,result)=>{
      if(err)throw err;
      var c = Math.ceil(result[0].c/pageSize);
      obj.pageCount = c;
      progress+=50;
      if(progress==100){
        res.send(obj);
      }
  });
  //2.2:查找当前页内容           中间5行
  var sql = " SELECT id,title,img_url,ctime,point";
     sql += " FROM xz_newss";
     sql += " LIMIT ?,?";
  var offset = parseInt((pno-1)*pageSize);   //计算分页偏移量
  pageSize = parseInt(pageSize)
  pool.query(sql,[offset,pageSize],(err,result)=>{
      if(err)throw err;
      //console.log(result);
      obj.data = result;
      progress+=50;
      if(progress==100){
        res.send(obj);
      }
  })
  //3:结果格式
  //res.send({code:"ok"})
});

//发送脚手架新闻的详细信息
app.get("/newinfo",(req,res)=>{
  var obj={
    title:"操的是卖白粉的心，挣得是卖白菜的钱",
    content:"还是打游戏有意思... ..."
  };
  res.send(obj);
})

//用户发表评论
const qs= require("querystring");
app.post("/postcomment",(req,res)=>{
    //为req对象绑定事件data      客户数据发送成功
    //触发事件
    req.on("data",(buf)=>{
        var str=buf.toString();            //1.将参数转换成字符串
        var obj=JSON.parse(str);          //2.讲字符串转换成js对象
        var msg=obj.msg;                 //3.msg  评论内容
        var nid=parseInt(obj.nid);      //4.nid  新闻编号

        var sql="INSERT INTO xz_comment(content,user_name,ctime,nid) VALUES(?,'匿名',now(),?)";
        pool.query(sql,[msg,nid],(err,result)=>{
          if(err) throw err;
          res.send({code:1,msg:"添加成功"});
        })
    })
})
//用户获取指定新闻编号所有评论
app.get("/getComment",(req,res)=>{
  //获取指定新闻的编号
  var nid=parseInt(req.query.id);
  //:参数  当前页码  页大小(一页显示几行数据)
  var pno = req.query.pno;            
  var pageSize = req.query.pageSize;
  //2:sql
  //2.1:查找总记录数->转换总页数 
  var sql = " SELECT count(id) as c FROM xz_comment";
      sql+=" WHERE nid=?";

  var obj = {};      //保存发送客户端数据
  var progress = 0;  //进度
  pool.query(sql,[nid],(err,result)=>{
      if(err)throw err;
      var c = Math.ceil(result[0].c/pageSize);
      obj.pageCount = c;
      progress+=50;
      if(progress==100){
        res.send(obj);
      }
  });
  //2.2:查找当前页内容           中间5行
  var sql = " SELECT id,content,ctime,user_name";
     sql += " FROM xz_comment";
     sql+=" WHERE nid=?";
     sql+=" ORDER BY id DESC";  //ORDER BY默认是升序，用DESC设置为降序排列
     sql += " LIMIT ?,?";
  var offset = parseInt((pno-1)*pageSize);   //计算分页偏移量
  pageSize = parseInt(pageSize)
  pool.query(sql,[nid,offset,pageSize],(err,result)=>{
      if(err)throw err;
      //console.log(result);
      obj.data = result;
      progress+=50;
      if(progress==100){
        res.send(obj);
      }
  })
})
//返回商品的详细信息
//服务器数据，返回模拟数据[id;title;now;old;商号]
//传参数：商品的id
app.get("/goodsinfo",(req,res)=>{
  var id=req.query.id;
  var obj={id:id,title:"艾吉贝2018",now:9999,old:88888,pid:"10044557486"};
  res.send(obj);
})

//购物城数据列表
//组件发送ajax请求获取并显示数据
app.get("/shopCart",(req,res)=>{
  var obj=[];
  obj.push({id:1,title:"艾吉贝2015新款多层收纳真皮单肩斜挎包女包",price:179.00,count:1})
 
  res.send(obj);
})

//商品列表
app.get("/goodslist",(req,res)=>{
  var obj=[
    {id:1,img_url:"http://127.0.0.1:3000/img/0bbbb6bf-0d00-45c0-92f7-347377f2edb5.jpg",title:"艾吉贝2018",now:"399.99",old:"199",q:2},
    {id:2,img_url:"http://127.0.0.1:3000/img/bd6771d9-f220-454d-83b2-d58d2046d23a.jpg",title:"艾吉贝2018",now:"2269.99",old:"199",q:1},
    {id:3,img_url:"http://127.0.0.1:3000/img/53698282-4ff7-4daa-bb4c-4bcaa14b00fc.jpg",title:"艾吉贝2018",now:"159.9",old:"199",q:2},
    {id:4,img_url:"http://127.0.0.1:3000/img/c2abb958-aca8-42f2-be52-ee1c072caec0.jpg",title:"艾吉贝2018",now:"589.99",old:"199",q:2}
  ];
  res.send(obj);
})

//讲商品的信息添加到购物车
app.get("/addCart",(req,res)=>{
  //1.获取参数 ：商品id 商品数量
    //1.1获取参数
    var pid=req.query.pid;
    var count=req.query.count;
    //1.2创建正则表达式验证  一定做
    //所有用户参数都需要验证js第一次 node.js第二次
    //安全
    var reg=/^[0-9]{1,}$/;                 //正则表达式
    if(!reg.test(pid)){                   //如果参数验证失败
       res.send({code:-1,msg:"商品编号参数有错误"});  
       return;                            //输出错误信息
    }
    if(!reg.test(count)){
      res.send({code:-2,msg:"商品数量参数有误"});
      return;                                   //输出错误信息并停止
    }
    //1.3如果验证失败返回
  //2.连接数据库
  //3.返回成功值
  res.send({code:1,msg:"添加成功"});
})


app.get("/login",(req,res)=>{
  //1:参数 2 uname upwd
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  //2:正则表达式验证 
  //3:sql 
  var sql = " SELECT count(uid) as c FROM xz_user";
      sql +=" WHERE uname=? AND upwd = ?";
  pool.query(sql,[uname,upwd],(err,result)=>{
        if(err)throw err;
        if(result[0].c==0){
          res.send({code:-1,msg:"登用户名或密码错误"});
        }else{
          res.send({code:1,msg:"登录成功"});
        }
  })


});


app.get("/test01",(req,res)=>{
  var id=req.query.id;
  var age=req.query.age;
  res.send(id+1+age);
});

app.post("/postProduct",(req,res)=>{
  req.on("data",(buff)=>{
    var obj=qs.parse(buff.toString());
    var pno=obj.pno;
    var price=obj.price;
    res.send({code:1,msg:":"+pno+":"+price});
  })
})


//根据用户名称查询数据库中是否已存在改用户
app.get('/selectUname',(req,res)=>{
  var $uname=req.query.uname;
  if(!$uname){
    res.send("用户名不能为空");
    return;
  }
  var sql="selec * from xz_user where uname=?";
  pool.query(sql,[$uname],(err,result)=>{
    if(result.length>0){
      res.send("用户名已存在");
    }else{
      res.send("用户名可用")
    }
  });
});