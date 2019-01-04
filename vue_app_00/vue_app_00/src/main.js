import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入mint-ui的css文件
import'mint-ui/lib/style.css'



Vue.config.productionTip = false

//引入mui的css文件   大部分的主键都要只用css在 main.js引入
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//按需引入
//引入组件mintui库Header
//1.引入指定组件
// import {Button,Header,Swipe,SwipeItem,Lazyload} from "mint-ui";
// //2.注册当前项目中  <mt-header>
// Vue.component(Header.name,Header);
// Vue.component(Swipe.name,Swipe);
// Vue.component(SwipeItem.name,SwipeItem);
// Vue.component(Button.name,Button);
// Vue.use(Lazyload);

  //完整引入
  import MintUI from "mint-ui";
  Vue.use(MintUI)

//引入vue-resource发送ajax
//1.引入vue-resource 库所有组件
import VueResource from "vue-resource";
//2.将所有组件注册
Vue.use(VueResource);

//3.:main.js  创建过滤器
//val  原日期对象
//返回 日期格式对象
  /*Vue.filter("dateFilter",function(val){
    var date=new Date(val);   //创建日期对象
    var y=date.getFullYear(); //获取年份
    var m=date.getMonth()+1; //获取月份
    var d=date.getDate();    //获取日期
    m<10&&(m="0"+m);        //如果月份小于10加前缀0
    d<10&&(d="0"+d);        //如果日小于10加前缀0
    return `${y}-${m}-${d}`;//拼接字符串
  });*/
//3.:main.js  创建过滤器
//val  原日期对象
//返回 日期格式对象  年-月-日 时:分:秒
  Vue.filter("datetimeFilter",function(val){
    var date=new Date(val);   //创建日期对象
    var y=date.getFullYear(); //获取年份
    var m=date.getMonth()+1; //获取月份
    var d=date.getDate();    //获取日期
    var h=date.getHours();    //获取时钟
    var mi=date.getMinutes(); //获取分钟
    var s=date.getSeconds();  //获取秒钟
    m<10&&(m="0"+m);        //如果月份小于10加前缀0
    d<10&&(d="0"+d);        //如果日小于10加前缀0
    h<10&&(h="0"+h);        //如果时钟小于10加前缀0
    mi<10&&(mi="0"+mi);     //如果分钟小于10加前缀0
    s<10&&(s="0"+s);        //如果秒钟小于10加前缀0
    return `${y}-${m}-${d} ${h}:${mi}:${s}`;

  });
  //配置VueRedource服务器根目录
  Vue.http.options.root="http://127.0.0.1:3000/";
  //修改请求头post格式
  //Vue.http.options.emulateJSON=true
//4.创建Vuex实例对象
     //1.下载安装Vuex npm  i vuex -D
     //2.引入Vuex
     import Vuex from "vuex"
     //3.注册Vuex实例
     Vue.use(Vuex)
     //4.创建Vuex实例对象
     var store=new Vuex.Store({
       state:{count:0},//购物车中商品的数量
       mutations:{
         increment(state,c){
           state.count+=parseInt(c)
          }, //修改共享数据的两个方法
         substract(state){
           state.count--
         }  //参数共享数据属性
       },
       getters:{
             optCount:function(state){
               return state.count;  //返回共享数据
             }
       },
       fetters:{}
     });
//将Vuex示例对象注册vue实例     
new Vue({
  router,
  render:h=>h(App),
  store
}).$mount('#app')
