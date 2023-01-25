<template>
  <div
    class="bg-[url('@/assets/images/bg/bg.jpg')] w-screen h-screen flex justify-center items-center"
  >
    <el-card
      class="bg-red-500/85 bg-opacity-0 flex justify-center text-center items-center m-1 p-0 h-2/5 w-2/5"
    >
      <div class="card-header">
        <span class="text-xl">欢迎登录综合管理平台</span>
      </div>

      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        size="large"
        label-position="left"
        class="w-max m-6 bg-red-500/5 bg-opacity-0"
      >
        <el-form-item label="用户名" prop="username">
          <el-input class="w-full" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密&nbsp&nbsp&nbsp&nbsp码" prop="password">
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
          settoken('username', res.data.username)
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
