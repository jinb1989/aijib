<template>
    <div class="app-goodslist">  
       <div class="goods-item" v-for="item in list" :key="item.id">
          <img :src="item.img_url" @click="getDetail(item.id)"/>
          <h3 class="title">{{item.title}}</h3>
         <div class="info">
            <p class="price">
                <span class="now">¥${{item.now}}</span>
                <span class="old"><s>¥${{item.old}}</s></span>
            </p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩 {{item.q}}件</span>
            </p>
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
             getDetail(id){
                //编程式跳转方式
                //参数：商品的id
                //console.log(id);
                this.$router.push("/home/goodsInfo/"+id);
            },
              getGoods(){
                //发送ajax请求并且获取图片列表并显示
                var url="http://127.0.0.1:3000/goodslist"
                this.$http.get(url).then(result=>{
                    //console.log(result);
                    //获取返回的数据保存再list属性中
                    this.list=result.body;
                   })
            }
        },
         created(){
          this.getGoods();
        }
    }
</script>
<style>
    .app-goodslist{
        display:flex;/*最外层设置弹性布局*/
        flex-wrap:wrap;/*子元素换行*/
        justify-content:space-between;/*两端对齐*/
        padding:7px;   /*为子元素内加补丁 内边距*/
    }
    .app-goodslist .goods-item{
        width:49%;            /*元素宽度*/
        border:1px solid #ccc;/*边框*/
        box-shadow:0 0 8px #ccc;/*阴影*/
        margin:4px 0;
        padding:2px;
        display:flex;                  /*弹性布局*/
        flex-direction:column;         /*垂直布局*/
        justify-content:space-between; /*两端对齐*/
        min-height:293px;             /*最小高度*/
    }
    .app-goodslist .goods-item img{
        width:100%;
    }
    .app-goodslist .goods-item .sell{
         display:flex;                  /*弹性布局*/
        justify-content:space-between; /*两端对齐*/
    }
    .app-goodslist .goods-item .now{
        color:red;
        margin-right:10px;
    }
</style>