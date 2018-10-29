<template>
  <div>
    <x-header :left-options="{showBack: false}">登录淋酱的异世界</x-header>
    <group style="margin-top:0.1rem">
      <x-input placeholder="请输入手机号" type="tel" :max="11" is-type="china-mobile" required v-model="tel" ref="tel">
        <x-button slot="right" type="primary" v-if="!isCount" mini @click.native="getCode">{{getCodeText}}</x-button>
        <x-button slot="right" type="primary" v-if="isCount" mini>{{countDown}} s</x-button>
      </x-input>
      <x-input placeholder="请输入6位验证码" :max="6" v-model="msgCode"></x-input>
      <p>&emsp;绑定手机即表示同意 <a href="https://baike.baidu.com/item/%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E5%90%88%E5%90%8C/9694343?fr=aladdin">《服务协议》</a></p>
      <x-button style="margin-top:1rem" @click.native="login" type="primary" :disabled="canClick">立即登录</x-button>
    </group>
  </div>
</template>

<script>
import { Group } from 'vux'
import API from '../api/index'

export default {
  components: {
    Group
  },
  data () {
    return {
      canClick: true,
      getCodeText: '发送验证码',
      isCount: false,
      tel: '',
      msgCode: '',
      countDown: '',
      timer: null
    }
  },
  methods: {
    // 获取验证码
    getCode() {
      // 验证手机号后
      if (this.$refs.tel.valid) {
        // 调用短信接口，在“略”处添加接口
        // ....略
        this.canClick= false;
        // 60s倒计时及文字变化
        const WAITING_TIME = 60;
        if (!this.timer) {
          this.countDown = WAITING_TIME;
          this.isCount = true;
          this.timer = window.setInterval(() => {
            if (this.countDown > 0 && this.countDown <= WAITING_TIME) {
              this.countDown--;
            } else {
              this.isCount = false;
              clearInterval(this.timer);
              this.timer = null;
              this.getCodeText = "重新获取"
            }}, 1000)
          }
        } else {
          this.$vux.toast.text('请输入正确的手机号', 'bottom')
        }
    },
    login () {
      this.$vux.toast.text('获得进入异世界资格', 'bottom')
       // 验证码6位
      if (this.msgCode.length===6) {
        //login的接口，在“略”处添加接口
        // ....略
        this.$vux.toast.text('异世界3秒后开启！', 'bottom');
        // 3秒跳转
        const timer2 = window.setTimeout(() => {
          this.$router.replace('/home');
          window.clearTimeout(timer2);
        }, 3000)
      } else {
        this.$vux.toast.text('异世界连接失败', 'bottom');
      }
    }
  },
  created() {
     API.w_login().then(res => {
      console.log(res)
    })
  },
}
</script>