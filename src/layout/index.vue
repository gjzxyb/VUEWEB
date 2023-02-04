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
          <el-footer><Footer></Footer></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lan="ts" setup>
import Header from './header/index.vue'
import Menu from './menu/index.vue'
import content from './content/index.vue'
import Footer from './footer/index.vue'
</script>

<style lang="scss" scoped>
.box-card {
  background-color: rgb(85 0 0 / 0%);
  box-shadow: none;
  border: 0px solid rgb(85 0 0 / 0%);
}
.el-card ::v-deep(.el-card__header) {
  border-bottom: 0px solid rgb(85 0 0 / 0%);
  padding: 2px 10px;
  background-color: rgb(85 0 0 / 0%);
}
.el-card ::v-deep(.el-card__body) {
  padding: 5px;
  background-color: rgb(85 0 0 / 0%);
}
</style>
