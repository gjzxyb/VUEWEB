<template>
  <div class="header border-0 flex flex-row justify-start py-3">
    <div class="title text-3xl absolute inset-y-0 left-2 py-3">通用管理系统</div>
    <div class="absolute inset-y-0 right-2 py-4">{{ name }}</div>
  </div>
</template>

<script lang="ts" setup>
import { gettoken } from '@/utils/abtoken'
const name = gettoken('username')
</script>

<style scoped lang="less"></style>
