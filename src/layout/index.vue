<template>
  <div>
    <div class="bg-red-400">
      <svgIcon
        class="text-amber-600"
        name="list"
        size="1"
      />
      <div>
        {{ x }}--{{ y }}
      </div>
      <div><Fold class=" w-5 h-5 text-blue-800 " /></div>
      <div>
        <el-table
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column
            prop="date"
            label="Date"
            width="180"
          />
          <el-table-column
            prop="name"
            label="Name"
            width="180"
          />
          <el-table-column
            prop="address"
            label="Address"
          />
        </el-table>
      </div>
      <el-button
        :plain="true"
        @click="open4"
      >
        error
      </el-button>
      <el-button text @click="open">Click to open the Message Box</el-button>
    </div>

    <Header />
    <Content />
  </div>
</template>

<script setup lang="ts">
import Header from './header/index.vue';
import Content from './content/index.vue';
import {Fold} from '@element-plus/icons-vue';
import {ElMessage, ElMessageBox, type Action} from 'element-plus';

const {x, y} = useMouse();
const tableData = [
  {
    'date': '2016-05-03',
    'name': 'Tom',
    'address': 'No. 189, Grove St, Los Angeles',
  },
  {
    'date': '2016-05-02',
    'name': 'Tom',
    'address': 'No. 189, Grove St, Los Angeles',
  },
  {
    'date': '2016-05-04',
    'name': 'Tom',
    'address': 'No. 189, Grove St, Los Angeles',
  },
  {
    'date': '2016-05-01',
    'name': 'Tom',
    'address': 'No. 189, Grove St, Los Angeles',
  },];
const open4 = () => {
  ElMessage.error('Oops, this is a error message.');
};
const open = () => {
  ElMessageBox.alert('This is a message', 'Title', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
</script>

<style scoped lang="less"></style>
