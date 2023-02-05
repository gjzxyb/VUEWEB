<template>
  <div class="common-layout">
    <el-container>
      <el-header class="flex justify-center w-screen bg-theme-primary-light-3">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px" class="flex justify-center h-screen bg-theme-primary-light-3">
          <Menu></Menu>
        </el-aside>
        <el-container>
          <el-main><content></content></el-main>
          <el-footer class="el-footer m-0 p-0"><Footer></Footer></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Header from './header/index.vue'
import Menu from './menu/index.vue'
import content from './content/index.vue'
import Footer from './footer/index.vue'
</script>

<style scoped lang="scss">
.el-footer ::v-deep(.el-footer-padding) {
  padding: 0px;
  background-color: rgb(85 0 0 / 0%);
}
</style>
