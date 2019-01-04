<template>
    <div class="app-homeContainer">
    <!--顶部导航条-->
       <mt-header fixed title="艾吉贝商城"></mt-header>
    <!--轮播图-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in list" :key="item.id">
                 <img :src="item.img_url">
             </mt-swipe-item>
        </mt-swipe>
    <!--宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                    <img src="../../img/icon_rm.png">
		                    <div class="mui-media-body">热门</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="home/goodsList">
		                    <img src="../../img/icon_tm.png">
		                    <div class="mui-media-body">精品</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/not_found">
		                    <img src="../../img/theme.png">
		                    <div class="mui-media-body">专题列表</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photo">
		                    <img src="../../img/icon_pp.png">
		                    <div class="mui-media-body">品牌</div></router-link></li>
		</ul> 
        <div class="lsit">
            <div>
              <router-link to="/home/splist"><img src="../../img/53698282-4ff7-4daa-bb4c-4bcaa14b00fc.jpg" class="package_left ">
              </router-link><br>
              <router-link to="/home/splist"><img src="../../img/33c256a8-7bff-4c6b-8686-f209bbad1301.jpg" class="package_left"></router-link>
              <router-link to="/home/splist"><img src="../../img/c2abb958-aca8-42f2-be52-ee1c072caec0.jpg" class="package_right"></router-link>
            </div>
            <hr>
            <div>
              <router-link to="/home/fylist"><img src="../../img/0bbbb6bf-0d00-45c0-92f7-347377f2edb5.jpg" class="clothes_left"></router-link>
              <router-link to="/home/fylist"><img src="../../img/0d86960d-20b5-4dd3-afee-8453b5ea5e95.jpg" class="clothes_right" id="d1"></router-link>			
              <router-link to="/home/fylist"><img src="../../img/1e13498f-419d-4ebd-a3b2-d0ad95ceaa39.jpg" class="clothes_right"></router-link>
            </div>
            
            <div>
              <router-link to="/home/splist"><img src="../../img/04ef50d9-97f0-4fea-8359-ee21376df392.jpg" class="digital_left"></router-link><br>
              <router-link to="/home/splist"><img src="../../img/d07a93ef-cdff-4b21-a12b-d817890aa6d6.jpg" class="digital_left2"></router-link>
              <router-link to="/home/splist"><img src="../../img/bd6771d9-f220-454d-83b2-d58d2046d23a.jpg" class="digital_right"></router-link>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                list:[]
            }
        },
        methods:{
            jumpShop(){
                //编程式跳转方式
                //this.$router.push("/home/shop?id=15");
                this.$router.push("/home/shop/19");
            },
            getImage(){
                //发送ajax请求并且获取图片列表并显示
                var url="http://127.0.0.1:3000/imagelist"
                this.$http.get(url).then(result=>{
                    //console.log(result);
                    //获取返回的数据保存再list属性中
                    this.list=result.body;
                })
            }
        },
        created(){
            this.getImage();
        }
    }
   
</script>
<style>
    .app-homeContainer .mint-swipe{
        height:200px;
    }
    .app-homeContainer .mint-swipe img{
        width:100%;
    }
    /*修改宫格大小*/
  .app-homeContainer .mui-grid-view.mui-grid-9{
      position:absolute;
        background:#fff;
        border:0;
    }
    .app-homeContainer .mui-grid-view.mui-grid-9 img{
        width:50px;
        height:50px;
        position:relative;
        top:-10px;
    }
   .app-homeContainer .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
       font-size:13px;
   }
   .app-homeContainer .mui-col-sm-3{
      width:93px;  
      height:100px;
   }
   .app-homeContainer .mui-media-body{
     position:relative;
        top:-10px;
   }
   .list{
       position:absolute;
   }
  .app-homeContainer .package_left{
       width:187px;
       height:150px;
       position:relative;
       top:123px; 
   }
   .app-homeContainer .package_right{
    width:186px;
    height:305px;
    float:right;
    position:relative;
    top:-32px;
    margin-left:1px;
   }
   .clothes_left{
    width:185px;
    height:268px;
    float:left;
    position:relative;
    top:110px;
    margin-right:3px;
   }
    .app-homeContainer .clothes_right{
       width:185px;
       height:132px;
        float:left;
        position:relative;
         top:-20px;
   }
   .digital_left{
        width:185px;
       height:150px;
       position:relative; 
       top:-5px;
   }
   .digital_left2{
        width:185px;
       height:150px;
        position:relative;
       top:-160px;
   }
   .digital_right{
     width:186px;
    height:305px;
    position:relative;
    top:-160px;
    margin-left:3px;
   }
   #d1{
       margin-bottom:2px;
   }
</style>