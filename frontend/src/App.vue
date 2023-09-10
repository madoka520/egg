<template>
    <router-view/>
</template>

<script>
import {ipc} from "@/utils/ipcRenderer";
import {ipcApiRoute} from "@/api/main";
import router from "@/router";

export default {
  name: 'App',
  setup() {
    document.getElementById('loadingPage').remove()
    router.push({ name: 'SpecialLoginWindow', params: {}});
    ipc.invoke(ipcApiRoute.loginWindow, {width: 800, height: 600}).then(r => {
      //
    })
  }
}
</script>
<style lang="less"></style>
