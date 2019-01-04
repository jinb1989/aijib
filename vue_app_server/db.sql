#1:进入xz库中
USE xz;
#2:创建新闻表
CREATE TABLE xz_news(
 id    INT PRIMARY KEY AUTO_INCREMENT, 
 title VARCHAR(128),
 ctime DATETIME,
 img_url VARCHAR(255),
 point INT
);
#now() 当前数据库时间 年月日时分秒
INSERT INTO xz_news VALUES(null,'艾吉贝2018新款多层收纳女包',now(),
"http://127.0.0.1:3000/img/timg.jpg",0);
INSERT INTO xz_news VALUES(null,'艾吉贝2018新款多层收纳女包',now(),
"http://127.0.0.1:3000/img/timg.jpg",0);
INSERT INTO xz_news VALUES(null,'艾吉贝2018新款多层收纳女包',now(),
"http://127.0.0.1:3000/img/timg.jpg",0);
INSERT INTO xz_news VALUES(null,'艾吉贝2018新款多层收纳女包',now(),
"http://127.0.0.1:3000/img/timg.jpg",0);
INSERT INTO xz_news VALUES(null,'艾吉贝2018新款多层收纳女包',now(),
"http://127.0.0.1:3000/img/timg.jpg",0);
INSERT INTO xz_news VALUES(null,'艾吉贝2018新款多层收纳女包',now(),
"http://127.0.0.1:3000/img/timg.jpg",0);
INSERT INTO xz_news VALUES(null,'艾吉贝2018新款多层收纳女包',now(),
"http://127.0.0.1:3000/img/timg.jpg",0);
INSERT INTO xz_news VALUES(null,'艾吉贝2018新款多层收纳女包',now(),
"http://127.0.0.1:3000/img/timg.jpg",0);
INSERT INTO xz_news VALUES(null,'艾吉贝2018新款多层收纳女包',now(),
"http://127.0.0.1:3000/img/timg.jpg",0);
INSERT INTO xz_news VALUES(null,'艾吉贝2018新款多层收纳女包',now(),
"http://127.0.0.1:3000/img/timg.jpg",0);
INSERT INTO xz_news VALUES(null,'艾吉贝2018新款多层收纳女包1',now(),
"http://127.0.0.1:3000/img/timg.jpg",0);
INSERT INTO xz_news VALUES(null,'艾吉贝2018新款多层收纳女包',now(),
"http://127.0.0.1:3000/img/timg.jpg",0);
INSERT INTO xz_news VALUES(null,'艾吉贝2018新款多层收纳女包',now(),
"http://127.0.0.1:3000/img/timg.jpg",0);
INSERT INTO xz_news VALUES(null,'艾吉贝2018新款多层收纳女包',now(),
"http://127.0.0.1:3000/img/timg.jpg",0);
INSERT INTO xz_news VALUES(null,'艾吉贝2018新款多层收纳女包',now(),
"http://127.0.0.1:3000/img/timg.jpg",0);



/*1:进入xz库中*/
USE xz;
/*2.创建评论*/
CREATE TABLE xz_comment(
    id INT PRIMARY KEY AUTO_INCREMENT,
    content VARCHAR(140),
    ctime DATETIME,
    user_name VARCHAR(50),
    nid INT
);
INSERT INTO xz_comment VALUES(null,'hai hai',now(),'匿名',1);
INSERT INTO xz_comment VALUES(null,'hai hai',now(),'匿名',1);
INSERT INTO xz_comment VALUES(null,'hai hai',now(),'匿名',1);
INSERT INTO xz_comment VALUES(null,'hai hai',now(),'匿名',1);
INSERT INTO xz_comment VALUES(null,'hai hai',now(),'匿名',1);
INSERT INTO xz_comment VALUES(null,'hai hai',now(),'匿名',1);
INSERT INTO xz_comment VALUES(null,'hai hai',now(),'匿名',1);
INSERT INTO xz_comment VALUES(null,'hai hai',now(),'匿名',1);
INSERT INTO xz_comment VALUES(null,'hai hai',now(),'匿名',1);
INSERT INTO xz_comment VALUES(null,'hai hai',now(),'匿名',1);
INSERT INTO xz_comment VALUES(null,'hai hai',now(),'匿名',1);
INSERT INTO xz_comment VALUES(null,'hai hai',now(),'匿名',1);
INSERT INTO xz_comment VALUES(null,'hai hai',now(),'匿名',1);
INSERT INTO xz_comment VALUES(null,'hai hai',now(),'匿名',1);
INSERT INTO xz_comment VALUES(null,'hai hai',now(),'匿名',1);
