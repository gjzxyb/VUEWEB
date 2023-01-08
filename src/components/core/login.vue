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
        <el-form-item label="用户名" prop="user">
          <el-input v-model="ruleForm.user" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密&nbsp&nbsp&nbsp&nbsp码" prop="pass">
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="w-full" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'

const ruleFormRef = ref<FormInstance>(),
  validateuser = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('请输入用户名'))
    } else {
      if (ruleForm.user !== '') {
        if (!ruleFormRef.value) {
          return
        }
      }
      callback()
    }
  },
  validatepass = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('请输入密码'))
    } else {
      if (ruleForm.pass !== '') {
        if (!ruleFormRef.value) {
          return
        }
      }
      callback()
    }
  },
  ruleForm = reactive({
    user: '',
    pass: ''
  }),
  rules = reactive({
    user: [{ validator: validateuser, trigger: 'blur' }],
    pass: [{ validator: validatepass, trigger: 'blur' }]
  }),
  submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) {
      return
    }
    formEl.validate((valid) => {
      if (valid) {
        console.log('submit!')
      } else {
        console.log('error submit!')
        return false
      }
    })
  }
</script>
<style lang="scss" scoped></style>
