<template>

      <el-container style="height: 100%">
        <el-aside width="auto">
          <CommentAside></CommentAside>
        </el-aside>
        <el-container>
          <el-header>
            <CommentHeader></CommentHeader>
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
</template>

<script>
import CommentAside from "@/components/CommentAside";
import CommentHeader from "@/components/CommentHeader";
    export default {
        name: "index",
        components:{
          CommentHeader,
          CommentAside
        }
    }
</script>

<style scoped lang="less">
  .el-header{
    background-color: #d3d3d3;
  }
  .el-main{
    padding-top: 0;
  }
</style>
