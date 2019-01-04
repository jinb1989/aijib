<template>
        <div class="app-homeContainer">
            <!--顶部导航条-->
            <mt-header fixed title="艾吉贝商城"></mt-header>
            <!--轮播图-->
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="item in list" :key="item.id">
                    <img :src="item.imgurl">
                </mt-swipe-item>
            </mt-swipe>
            <div class="white-bg p10 details_con">
                <h5 class="item-name" id="prodName">艾吉贝2015新款多层收纳真皮单肩斜挎包女包头层牛皮斜跨小包包女</h5>
                <ul>
                    <li>
                        <span class="price-color">商城价格：</span>
                        <span class="price">¥<span class="price" id="prodCash">179.00</span></span>
                    </li>
                    <li id="choose_0" index="0">
                        <label id="propName" propname="颜色">颜色：</label>
                        <dl>
                            <dd><span  class="fy_color1"></span>牛仔</dd>
                            <dd><span  class="fy_color2"></span>棕色</dd>
                            <dd><span  class="fy_color3"></span>蓝色</dd>
                        </dl>
                    </li><br>
                    <li>
                        <label>数量：</label>
                        <ul class="mui-table-view">
				           <li class="mui-table-view-cell mui-media" v-for="item in cartlist" :key="item.id">
					          <a href="javascript:;">
						           <img class="mui-media-object mui-pull-left" src="">
						           <div class="mui-media-body">
							           {{item.title}}
							         <p class='mui-ellipsis'>
                                        <span class="price">数量:&nbsp;</span>
                                        <span class="count">
                                    <!--2.2mui 数字按钮-->
                                            <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                                                   <button class="mui-btn mui-btn-numbox-minus" type="button" @click="cartSub(item.id)">-</button>
                                                   <input id="test" class="mui-input-numbox" type="number" :value="item.count"/>
                                                    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="cartAdd(item.id)">+</button>
                                            </div>
                                       </span>
                                     </p>
                                    </div>
                               </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="img_width"><img src="../../img/8a9740c7-7f8e-4f20-ba64-1e90dd596ebe.jpg"></div>
                <P>
                    <a>
                    <input type="button" style="background-color:#007AFF;float:right;font-weight:bold; "value="加入购物车">
                    </a>
                    <router-link to="/home/login">
                    <input type="button" style="background-color:#F24343;font-weight:bold;float:right; "value="立即购买">
                    </router-link>
                </P>
            </div>
        </div>
</template>
<script>
import  swiper from "../sub/swiper.vue";
     export default {
        data(){
            return {
                list:[],
                cartlist:[]
            }
        },
        methods:{
              getCartList(){
                var id=this.$route.params.id;
                this.$http.get("shopCart?id="+id).then(result=>{
                this.cartlist=result.body;
                })
            },
            cartSub(id){
                //获取数组中的每一个元素
            for(var item of this.cartlist){
            //判断参数中的id与当前元素id是否相同
            if(item.id==id){
                if(item.count<2) 
                return;
            //当前元素数量加1
                item.count--;
                break;
                }
            }
            },
        cartAdd(id){
            //获取数组中的每一个元素
            for(var item of this.cartlist){
            //判断参数中的id与当前元素id是否相同
            if(item.id==id){
            //当前元素数量加1
                item.count++;
                break;
            }
            }
        },
        getImage(){
        //发送ajax请求并且获取图片列表并显示
           var url="http://127.0.0.1:3000/img_fy_list"
            this.$http.get(url).then(result=>{
            //console.log(result);
            //获取返回的数据保存再list属性中
            this.list=result.body;
           })
          }
    },
            created(){
            this.getImage();
            this.getCartList();
        }
     
     }
</script>
<style>
    .app-homeContainer .mint-swipe img{
        height:200px;
        width:100%;
    }
    ul{
        list-style: none;
        padding-left:10px;
    }
    #choose_0 dl dd{
        float:left;
        margin:0 20px;
    }
    #choose_0 dl dd .fy_color1{
        border-left:30px solid #252E57;
    }
    #choose_0 dl dd .fy_color2{
        border-left:30px solid #433B30;
    }
     #choose_0 dl dd .fy_color3{
        border-left:30px solid #013986;
    }
    .img_width img{
        width:100%;
    }
    .price{
        color:#000;
    }
</style>