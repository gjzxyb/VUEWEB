<template>
  <div>
    <div class="bg-red-400">
      <svgIcon
        class="text-amber-600"
        name="list"
        size="1"
      />
      <div>{{ x }}--{{ y }}</div>
    </div>

    <Header />
    <Content />
  </div>
</template>

<script setup lang="ts">
import Header from './header/index.vue';
import Content from './content/index.vue';

const {x, y} = useMouse();
</script>

<style scoped lang="less"></style>
