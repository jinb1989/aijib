<template>
   <div class="app-goodsinfo">
      <!--1商品轮播区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper-box :list="imglist"></swiper-box>
                </div>
            </div>
        </div>        
      <!--2商品购买区域-->
        <div class="mui-card">
			<div class="mui-card-header">{{info.title}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
                       市场价:<del>¥{{info.old}}</del>
                       销售价:<span class="now">¥{{info.now}}</span>
                    </p>
                    <p>
                       购买数量:
                    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                        <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goodSub">-</button>
                        <input id="test" class="mui-input-numbox" type="number" value="1" v-model="val"/>
                        <button class="mui-btn mui-btn-numbox-plus" type="button" @click="goodAdd">+</button>
				    </div>
                    </p>
                    <p>
                      <router-link to="/home/login">
                        <mt-button type="primary" size="small">立即购买</mt-button>
                      </router-link>
                      <mt-button type="danger" size="small" @click="addCartTo()">加入购物车</mt-button>
                    </p>
				</div>
			</div>
			<div class="mui-card-footer">
                   
            </div>
		</div>
      <!--3商品参数区域-->
        <div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号:{{info.pid}}</p>
                    <p>商品颜色:山里红</p>
                    <p>商品运费:0</p>
				</div>
			</div>
			<div class="mui-card-footer">
                <mt-button size="small">图文介绍</mt-button>
                   <mt-button size="small">商品评论</mt-button>
            </div>
		</div>
   </div>
</template>
<script>
//父组件GoodInfo.vue


//调用
//1.引入子组件
import  swiper from "../sub/swiper.vue";

//单独引入Toast组件
import {Toast} from "mint-ui";

//引入mui.js 库
//import mui from "../../lib/mui/js/mui.js";
//完成加号和减号操作1~999

    export default {
        data(){
            return {
                imglist:[],
                val:1,
                 info:{}
            }
        },
        methods:{
            addCartTo(){
                //console.log("添加至购物车");
                //1.讲商品编号和数量保存到服务器
                    //获取商品编号
                    var id=this.$route.params.id;
                    //获取商品数量
                     var count=this.val;
                     //console.log(id+"_"+count);
                    //发送请求
                    this.$http.get("addCart?pid="+id+"&count="+count).then(result=>{
                       if(result.body.code==1){
                           //更新购物车中商品的数量
                           //修稿Vuex共数据
                           this.$store.commit("increment",count);
                           //共享不能刷新
                           //localStore  浏览器自带对象
                           //永久保存
                           Toast(result.body.msg);
                       } else{
                           Toast(result.body.msg);
                       }
                    })
                //2.更新App.vue组件购物车数量
            },
            getGoodInfo(){
                var id=this.$route.params.id;
                this.$http.get("goodsinfo?id="+id).then(result=>{
                this.info=result.body;
                    console.log(this.info);//返回五个属性
                })
            },
            goodSub(){
                if(this.val>1)
              this.val--;
              
            },
            goodAdd(){
                if(this.val<=998)
               this.val++;
            },
            //模拟数据
            //服务器数据，返回模拟数据[id;title;now;old;商号]
            //传参数：商品的id
            getImageList(){
                this.$http.get("imagelist").then(result=>{
                    this.imglist=result.body;
                    
                })
            }
        },
        created(){//接收参数
        this.getGoodInfo();
        this.getImageList();
        console.log(this.$route.params.id);
         },
         //2.注册
         components:{
           "swiper-box":swiper
         }
    }
</script>
<style>
    .app-goodsinfo .mui-card{
        height:260px;
    }
</style>