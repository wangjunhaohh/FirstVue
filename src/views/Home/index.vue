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
        <hr  class="hr-info">
        <div class="login-info">
          <p>上次登录时间:<span>2022-3-29</span></p>
          <p>上次登录地点:<span>湖南</span></p>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "home",
        data(){
          return{
            userImage:require('@/assets/images/1.jpg')
          }
        }
    }
</script>

<style scoped>
  .userPhoto{

    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .userinfo{
    float: right;
    margin-left: 10px;
  }
  .login-info{
    float: left;
  }
  .hr-info{
    height: 0px;
  }
</style>
