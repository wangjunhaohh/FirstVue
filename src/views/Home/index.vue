<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover" >
        <div class="user">
              <img :src="userImage" class="userPhoto"/>
              <div class="userinfo">
                <p class="name">Admin</p>
                <p class="access">超级管理员</p>
              </div>
        </div>

        <div class="login-info">
          <p>上次登录时间:<span>2022-3-29</span></p>
          <p>上次登录地点:<span>湖南</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px;height: 380px">
        <el-table :data="tableData">
          <el-table-column v-for="(val,index) in tableLabel" :key="index" :prop="index" :label="val">

          </el-table-column>
        </el-table>
      </el-card>

    </el-col>

    <el-col :span="16" style="margin-top: 20px">
      <div class="num">
          <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex',padding:0}">
            <i class="icon" :class="'el-icon-'+item.icon" :style="{background:item.color}"></i>
            <div class="detail">
            <p class="num">￥{{item.value}}</p>
            <p class="txt">{{item.name}}</p>
            </div>
          </el-card>
      </div>
      <el-card style="height: 220px"></el-card>
      <div class="graph">
          <el-card style="height: 200px"></el-card>
          <el-card style="height: 200px"></el-card>
      </div>
    </el-col>

  </el-row>
</template>

<script>
import {getMenu} from "@/api/data";

export default {
        name: "home",
        data(){
          return{
            userImage:require('@/assets/images/1.jpg'),
            tableData:[
              {
                name:'oppo',
                todayBuy:100,
                monthBuy:300,
                totalBuy:800
              },{
                name:'vivo',
                todayBuy:100,
                monthBuy:300,
                totalBuy:800
              },{
                name:'apple',
                todayBuy:100,
                monthBuy:300,
                totalBuy:800
              },{
                name:'三星',
                todayBuy:100,
                monthBuy:300,
                totalBuy:800
              } ,{
                name:'小米',
                todayBuy:100,
                monthBuy:300,
                totalBuy:800
              }
            ],
            tableLabel:{
              name:'商品名',
              todayBuy:'今日购买',
              monthBuy:'本月购买',
              totalBuy:'总购买'
            },
            countData:[
              {
                name:"今日支付订单",
                value:'1234',
                icon : 'success',
                color:"#2ec7c9",
              },{
                name:"今日收藏订单",
                value:'210',
                icon : 'star-on',
                color:"#ffb980",
              },{
                name:"今日未支付订单",
                value:'1234',
                icon : 's-goods',
                color:"#5abe1f",
              },{
                name:"本月支付订单",
                value:'210',
                icon : 'success',
                color:"#2ec7c9",
              },{
                name:"本月收藏订单",
                value:'220',
                icon : 'star-on',
                color:"#ffb980",
              },{
                name:"本月未支付订单",
                value:'1234',
                icon : 's-goods',
                color:"#5abe1f",
              }
            ]
          }
        },
        mounted() {
          // this.$http.get('/user?id=12345').then(function (response) {
          //   console.log(response)
          // }).catch(function (error) {
          //   console.log(error)
          // })
          getMenu().then(res =>{
            console.log(res)
          })
        },
    }
</script>

<style scoped>

</style>
