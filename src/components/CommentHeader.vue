<template>
  <header>
    <div class="left-content" @click="handleMenu" >
      <el-button plain icon="el-icon-menu" size="mini"></el-button>
      <h3 style="color: white" >首页</h3>
    </div>


    <div class="right-content" >
      <el-dropdown trigger="click" size="mini">
        <span>
          <img :src="userImage" class="user">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item >个人中心</el-dropdown-item>
          <el-dropdown-item >退出</el-dropdown-item>
        </el-dropdown-menu>

      </el-dropdown>
    </div>

  </header>
</template>

<script>
    export default {
        name: "CommentHeader",
        data(){
          return{
            userImage:require('../assets/images/1.jpg')
          }
        },
        methods:{
          handleMenu(){
            this.$store.commit('collapseMenu')
          }
        }
    }
</script>

<style scoped lang="less">
header{
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.left-content{
  display: flex;
  align-items: center;
  .el-button{
    margin-right: 20px;
  }
}
.right-content{
  .user{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
