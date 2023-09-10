<template>
  <a-layout class="container">
    <img src="@/assets/img/madoka&homura.webp" style="height: 561px;pointer-events: none"/>
    <a-form
        style="position:absolute;left:160px;top: 35%;width: 400px"
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
    >
      <h1 style="margin-left: 100px;margin-top: -60px;margin-bottom: 30px;">萌兔管理系统</h1>
      <a-form-item
          name="username"
          label="用户名："
          :rules="[{ required: true, message: '请输入用户名！' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
          name="password"
          label="密&nbsp;&nbsp;&nbsp;&nbsp;码"
          :rules="[{ required: true, message: '请输入密码！' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <a-form-item style="margin-top: -20px;" name="remember" :wrapper-col="{ offset: 4, span: 16 }">
        <a-checkbox style="float: left;margin-left: 68px;" v-model:checked="formState.remember">记住我</a-checkbox>
        <a style="float:right;margin-right: -79px;" class="login-form-forgot" href="">忘记密码？</a>
      </a-form-item>
      <a-form-item style="margin-top: -20px;" :wrapper-col="{ offset: 8, span: 16 }">
        <a-button style="width: 270px" type="primary" html-type="submit">登录</a-button>
        <a href="">没有账号？点我注册</a>
      </a-form-item>
    </a-form>
  </a-layout>
</template>
<script setup>
import {getCurrentInstance, reactive} from 'vue';
import {ipcApiRoute} from '@/api/main';
import {ipc} from '@/utils/ipcRenderer';

const { proxy } = getCurrentInstance()

const formState = reactive({
  username: '',
  password: '',
  remember: true,
});

async function assignCookiesToFormState() {
  try {
    const cookies = await ipc.invoke(ipcApiRoute.loginCookies, {});
    Object.assign(formState, cookies);
  } catch (error) {
    console.error(error);
  }
}

assignCookiesToFormState();


const onFinish = values => {
  ipc.invoke(ipcApiRoute.login,values).then(r=>{
    if (r === true){
      proxy.$router.push({ name: 'Framework', params: {}});
      ipc.invoke(ipcApiRoute.restoreWindow,{width:980, height: 650}).then(r=>{
      })
    }else {
      alert("用户名或密码错误！")
    }
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
  user-select: none;
}


</style>
