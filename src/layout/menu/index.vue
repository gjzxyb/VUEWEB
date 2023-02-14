<template>
  <el-menu
    default-active="2"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    class="el-menu-container"
    :unique-opened="true"
    active-text-color="#409Eff"
    background-color="#545c64"
    text-color="#fff"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location></location></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
//     active-text-color="#409Eff"
//     background-color="#545c64"
//     text-color="#fff"
//     第二种配色方案
//     background-color="#304156"
//     text-color="#FFFFFF"
//     active-text-color="#409eff"
</script>

<style lang="scss" scoped>
// 重要以下就是添加menu的宽度和高度。
.el-menu {
  height: calc(100vh);
}
</style>
