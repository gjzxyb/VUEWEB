<template>
  <div class="header static justify-start py-3">
    <div class="static left-0 py-3">
      <el-icon>
        <expand v-if="props.collpase" @click="handleCollapse"></expand>
        <fold v-else @click="handleCollapse"></fold>
      </el-icon>
    </div>
    <div class="title absolute left-1/2 translate-x-[-50%] text-3xl text-white">通用管理系统</div>
    <div class="absolute right-18 py-4 text-white">
      {{ name }}
    </div>
    <div class="absolute right-2 py-4 text-white">
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
const props = defineProps<{
  collpase: boolean
}>()
const emits = defineEmits<{
  // 这样写，父组件通过v-model传值进来，父组件那边就不用在定义事件改变这里传过去的值了
  // update:collpase 就会自动改变v-model传过来的值了
  (e: 'update:collpase', value: boolean): void
}>()

const handleCollapse = () => {
  emits('update:collpase', !props.collpase)
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
