<template>

      <el-container style="height: 100%">
        <el-aside width="auto">
          <CommentAside></CommentAside>
        </el-aside>
        <el-container>
          <el-header >Header</el-header>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
</template>

<script>
import CommentAside from "@/components/CommentAside";

    export default {
        name: "index",
        components:{
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
