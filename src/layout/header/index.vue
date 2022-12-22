<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">
      Primary
    </el-button>
    <el-button type="success">
      Success
    </el-button>
    <el-button type="info">
      Info
    </el-button>
    <el-button type="warning">
      Warning
    </el-button>
    <el-button type="danger">
      Danger
    </el-button>
  </el-row>
  <el-button
    plain
    @click="open2"
  >
    Won't close automatically
  </el-button>
</template>

<script lang="ts" setup>
import {ElNotification} from 'element-plus';

const open2 = () => {
  ElNotification({
    'title': 'Prompt',
    'message': 'This is a message that does not automatically close',
    'duration': 0,
  });
};
</script>



<style scoped lang="less">

</style>
