<template>
 <div class="login">
    <div class="login-con">
      <form ref="loginForm" :model="form"  @keydown.enter="handleSubmit">
	    <div >
	      <input v-model="form.userName" placeholder="请输入用户名" />
	    </div>
	    <div >
	      <input type="password" v-model="form.password" placeholder="请输入密码" />
	    </div>
	    <div>
	      <button @click="handleSubmit"  long>登录</button>
	    </div>
	  </form>
  </div>
</div>
</template>

<script>
// @ is an alias to /src

import { mapActions } from 'vuex'

import { getGuestUserData,login} from '@/api/data'
import { getUrlKey } from '@/libs/common'

export default {
  name: 'login',
  data () {
    return {
      isShowError: false,
      isLoading:1,
      form: {
        userName: '',
        password: ''
      }
    }
  },
  mounted:function () {


  },
  methods: {
    ...mapActions([
      'changeLogin'
    ]),
    handleSubmit ({ userName, password }) {
      var _this=this;
      login({ userName, password }).then(res => {
       
        if(res.data.succ){         
          _this.$router.push({
            name: _this.$config.homeName
          })
          _this.changeLogin({ userInfo:_this.form, tooken: res.data.tooken });
        }else{
            _this.isShowError=1;
        }

      })
    }
  }
}
</script>

<style>
.login-con .login-tip{color: red;margin-top:-10px;}
</style>