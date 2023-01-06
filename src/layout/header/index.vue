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
  <el-button
    plain
    @click="open3"
  >
    Notification with offset
  </el-button>
  <div>
    <h1 class="animate__animated animate__bounce">
      An animated element
    </h1>
  </div>
  <div>{{ date1 }}</div>
</template>

<script lang="ts" setup>

import {ElNotification} from 'element-plus';
import moment from 'moment';

const date1 = moment('2010-10-20 4:30', 'YYYY-MM-DD HH:mm');
const open2 = () => {
  ElNotification({
    'title': 'Prompt',
    'message': 'This is a message that does not automatically close',
    'duration': 0,
  });
};
const open3 = () => {
  ElNotification.success({
    'title': 'Success',
    'message': 'This is a success message',
    'offset': 100,
  });
};
</script>



<style scoped lang="less">

</style>
