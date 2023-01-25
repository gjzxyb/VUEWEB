<template>
  <div class="bg-blue-600 w-screen h-screen flex justify-center items-center">
    <el-card class="box-card flex justify-center text-center items-center m-1 p-0 h-1/3 w-1/3">
      <div class="card-header">
        <span>欢迎登录综合管理平台</span>
      </div>

      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        size="large"
        label-position="left"
        label-width="auto"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密&nbsp&nbsp&nbsp&nbsp码" prop="password">
          <el-input v-model="ruleForm.password" type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="w-full" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ElMessage, type FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'
import { ruleuser, rulepass } from '@/utils/vaildate'
import { getArticleList } from '@/api/request'
import { deltoken, settoken } from '@/utils/abtoken'

const ruleFormRef = ref<FormInstance>(),
  ruleForm = reactive({
    username: '',
    password: ''
  }),
  rules = reactive({
    username: [{ validator: ruleuser, trigger: 'blur' }],
    password: [{ validator: rulepass, trigger: 'blur' }]
  }),
  submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) {
      return
    }
    formEl.validate((valid) => {
      if (valid) {
        getArticleList(ruleForm).then((res) => {
          //deltoken('token')
          settoken('token', res.data.token)
          ElMessage.success('登录成功!')
        })
      } else {
        ElMessage.error('登录失败!')
        return false
      }
    })
  }
</script>
<style lang="scss" scoped></style>
