<template>
  <div class="container">
    <a-form
        style="position:absolute;top: 35%;width: 500px"
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
    >
      <a-form-item
          label="用户名"
          name="username"
          :rules="[{ required: true, message: '请输入用户名！' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
          label="密&nbsp;&nbsp;&nbsp;&nbsp;码"
          name="password"
          :rules="[{ required: true, message: '请输入密码！' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <a-form-item name="remember" :wrapper-col="{ offset: 4, span: 16 }">
        <a-checkbox style="float: left;margin-left: 90px;" v-model:checked="formState.remember">记住我</a-checkbox>
        <a style="float:right;margin-right: -90px;" class="login-form-forgot" href="">忘记密码？</a>
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button style="width: 333px" type="primary" html-type="submit">登录</a-button>
        <a href="">没有账号？点我注册</a>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup>
import { reactive , ref , watch , getCurrentInstance , onMounted , defineComponent } from 'vue';
import axios from "axios";
import "@/utils/ipcRenderer";
import {ipcApiRoute} from "@/api/main";
const { proxy } = getCurrentInstance()

const formState = reactive({
  username: '',
  password: '',
  remember: true,
});
const onFinish = values => {
  axios.post("/api/login").then(res=>{
    console.log(res);
  })
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

</script>
<style lang="less">

.container{
  display: flex;
  justify-content: center;
}


</style>