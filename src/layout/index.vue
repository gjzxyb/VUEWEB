<template>
  <div>
    <div class="bg-red-400">
      <svgIcon class="text-amber-600" name="list" size="1"></svgIcon>
      <div>{{ x }}--{{ y }}</div>
      <div>
        <Fold class="w-5 h-5 text-blue-800"></Fold>
        <div class="text-25px bg-teal-700 text-theme-text-primary flex justify-center">
          你好Unocss
        </div>
      </div>
      <div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="180"></el-table-column>
          <el-table-column prop="name" label="Name" width="180"></el-table-column>
          <el-table-column prop="address" label="Address"></el-table-column>
        </el-table>
      </div>
      <el-button plain @click="open1">Success</el-button>
      <el-button plain @click="open2">Warning</el-button>
      <el-button plain @click="open3">Info</el-button>
      <el-button plain @click="open4">Error</el-button>
      <el-button :plain="true" @click="open6">success</el-button>
      <el-button :plain="true" @click="open7">warning</el-button>
      <el-button :plain="true" @click="open5">message</el-button>
      <el-button :plain="true" @click="open8">error</el-button>
    </div>

    <Header></Header>
    <Content></Content>
  </div>
</template>

<script setup lang="ts">
import Header from './header/index.vue'
import Content from './content/index.vue'
import { Fold } from '@element-plus/icons-vue'
import { ElMessage, ElNotification } from 'element-plus'
import { getstudentlist } from '@/api/request'

const headers = { token: localStorage.getItem('token'), username: localStorage.username }

getstudentlist().then((res) => {
  console.log(res)
  const studentlist = res.data.data
})

const { x, y } = useMouse(),
  tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }
  ],
  open1 = () => {
    ElNotification({
      title: 'Success',
      message: 'This is a success message',
      type: 'success'
    })
  },
  open2 = () => {
    ElNotification({
      title: 'Warning',
      message: 'This is a warning message',
      type: 'warning'
    })
  },
  open3 = () => {
    ElNotification({
      title: 'Info',
      message: 'This is an info message',
      type: 'info'
    })
  },
  open4 = () => {
    ElNotification({
      title: 'Error',
      message: 'This is an error message',
      type: 'error'
    })
  },
  open5 = () => {
    ElMessage('this is a message.')
  },
  open6 = () => {
    ElMessage({
      message: 'Congrats, this is a success message.',
      type: 'success'
    })
  },
  open7 = () => {
    ElMessage({
      message: 'Warning, this is a warning message.',
      type: 'warning'
    })
  },
  open8 = () => {
    ElMessage.error('Oops, this is a error message.')
  }
</script>

<style scoped lang="less"></style>
