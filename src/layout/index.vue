<template>
  <div>
    <el-container>
      <el-aside width="auto"><Menu></Menu></el-aside>
      <el-container>
        <el-header><Header></Header></el-header>
        <el-main>
          <Breadcrumb></Breadcrumb>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Header from './header/index.vue'
import Menu from './menu/index.vue'
import Breadcrumb from './Breadcrumb/index.vue'
</script>

<style scoped lang="scss">
.el-header {
  background-color: #363d40;
  // 给头部设置一下弹性布局
  display: flex;
  // 让它贴标左右对齐
  justify-content: space-between;
  // 清空图片左侧padding
  padding-left: 0;
  // 按钮居中
  align-items: center;
  // 文本颜色
  color: #fff;
  // 设置文本字体大小
  font-size: 20px;
  // 嵌套
  > div {
    // 弹性布局
    display: flex;
    // 纵向上居中对齐
    align-items: center;
    // 给文本和图片添加间距，使用类选择器
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #313743;
  height: 100vh;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #e9edf1;
}
.el-footer {
  padding: 0px;
  background-color: rgb(85 0 0 / 0%);
}
</style>
