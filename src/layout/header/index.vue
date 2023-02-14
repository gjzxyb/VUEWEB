<template>
  <div class="header border-0 inline-flex justify-start py-3">
    <div class="px-2 py-3">
      <el-icon size="36">
        <Expand>@click="isCollapse = !isCollapse"</Expand>
      </el-icon>
    </div>
    <div class="title text-3xl text-white">通用管理系统</div>
    <div class="right-2 py-4 text-white">
      {{ name }}
    </div>
    <div class="right-2 py-4 text-white">
      <el-button type="info" @click="logout">退出</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
import { gettoken, deltoken } from '@/utils/abtoken'
const name = gettoken('username')
const logout = () => {
  deltoken('token')
  deltoken('username')
  router.push('/login')
}
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
</style>
