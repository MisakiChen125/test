<template>
  <div class="home">
      <div class="head">
        
        <img class="ban1" src="../images/banner-2.png" alt="">
        <img class="tou1" src="../images/avatar.jpg" alt="">
      </div>
      <div class="h-title">
        <b>爱时尚精品屋</b>
        <p>公告：欢迎光临，流行爆款库存有限，尽早下单，谢谢。</p>
      </div>
      <!-- 排序导航 -->
      <div class="jia">
        <!-- <li>价格升序</li>
        <li>价格降序</li>
        <li>销量升序</li>
        <li>销量降序</li> -->
        <li v-for="(item,index) in navList" :key="index" @click="sort(index)">{{item}}</li>
      </div>
     
        <div class="lbox-item" v-for="(item,index) in list" :key="index" > 
          <div class="left">
            <img :src='item.pic' alt="">
          </div>
          <div class="right">
            <p>{{item.name}}</p>
            <p>已售：{{item.buyCount}}}件</p>
            <b>
              <span>单价：￥{{item.price}}</span>
              <button @click="addCart(item)">加入购物车</button>
            </b>
          </div>
          
        </div>
      <div class="icon"><img src="../images/cart.png" alt="">
        
      </div>
      <div class="yuan">0</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      list:[],
      navList:['价格升序','价格降序','销量升序','销量降序'],
      cindex:0
    }
  },
 
  mounted () {
    axios.get('https://yantianfeng.com/api/goodList').then(res=>{
       this.list=res.data.goodList
       
        
    })
  },
  created () {
    
  },
  components: {
   
  },
  methods: {
    sort(index){
      this.cindex=index
      if(index===0){
        this.list.sort((a,b)=>{
             return a.price-b.price
        })
      }
      else if(index===1){
        this.list.sort((a,b)=>{
          return b.price-a.price
        })
      }
      else if(index===2){
        this.list.sort((a,b)=>{
          return a.buyCount-b.buyCount
        })
      }else{
        this.list.sort((a,b)=>{
          return b.buyCount-a.buyCount
        })
      }
    },
    addCart(item){
      console.log(item)
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.head{
  width: 100%;
  height: 200px;
  position: relative;
  flex-shrink: 0;
    .ban1{
      width: 100%;
      height: 100%;
    }
    .tou1{
      width: 70px;
      height: 70px;
      z-index: 999;
      position: absolute;
      bottom: -25px;
      left:50%;
      margin-left: -35px;
      border-radius: 50%;
    }
  

}
.h-title{
  width: 100%;
  margin: 40px auto 20px;
  // padding: 0 15px;
  flex-shrink: 0;
  text-align: center;
  display: flex;
  flex-direction: column;

  b{
    font-size: 20px;
    margin-bottom: 15px;
  }
  p{
    font-size: 15px;
    color: #888;
  }
}
.jia{
  width: 100%;
  height: 50px;
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: space-around;
  margin-top: 10px;
  color: #333;
  position: sticky;
  position: -webkit-sticky;
  left: 0;
  top: 0;
  z-index: 999;
  background: #fff;
}

.lbox-item{

   display: flex;
   margin: 10px 20px;
}
.left{
    width:30%;
    img{
      width: 100px;
      height: 100px;
    }
}    
.right{
  width:70%;
  margin-left: 10px;
  p{
    margin: 7px;
  }
  b{
    display: flex;
    justify-content: space-between;
    padding:0 10px;
    button{
      width: 100px;
      height: 40px;
      background: #f00;
      color: #fff;
      border:0;
      outline: none;
    }
  }
}
.right :first-child{
    white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;

}
.icon{
  width: 60px;
  height: 60px;
  // line-height: 60px;
  border-radius: 50%;
  background: #09f;
  position: fixed;
  bottom: 30px;
  right: 15px;
  text-align: center;

  img{
    width: 40px;
    height: 40px;
    margin-top: 10px;
     
  }
}
.yuan{
  width: 20px;
  height: 20px;
  background: #f00;
  border-radius: 50%;
  position: fixed;
  bottom: 80px;
  right: 15px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 15px;
}
</style>





