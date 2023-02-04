<template>
  <div
    class="bg-[url('@/assets/images/bg/user-info-bg.png')] w-screen h-screen flex justify-center items-center"
  >
    <el-card class="box-card h-2/5 w-1/3">
      <template #header>
        <div class="card-header flex justify-center text-center items-center m-1 p-0">
          <span class="text-2xl text-red-600">欢迎登录综合管理平台</span>
        </div>
      </template>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        size="large"
        label-position="left"
      >
        <el-form-item prop="username">
          <el-input class="w-full" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            class="w-full"
            v-model="ruleForm.password"
            type="password"
            autocomplete="off"
          ></el-input>
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
import { login } from '@/api/request'
import { deltoken, settoken } from '@/utils/abtoken'
import router from '@/router'

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
        login(ruleForm, true).then((res: any) => {
          settoken('token', res.data.token)
          settoken('username', res.data.username)
          console.log(res.data)
          ElMessage.success({
            message: '登录成功!',
            duration: 5 * 1000
          })
          router.push('/home')
        })
      } else {
        ElMessage.error('验证失败!')
        return false
      }
    })
  }
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
