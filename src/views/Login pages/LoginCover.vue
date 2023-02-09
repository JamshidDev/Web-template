<template>
  <div class="login-page-v2">
    <div class="page-cover"></div>
    <div class="login-container">
      <div class="form-box">
        <div class="title">Welcome back!</div>
        <div class="subtitle">Please enter your credentials to sign in!</div>
        <div class="input-box">
          <span class="label">Username</span>
          <input type="text" class="input-text"  placeholder="Username"/>
          <span class="error-message">Please enter your user name</span>
        </div>
        <div class="input-box">
          <span class="label">Password</span>
          <input class="input-text" type="text" placeholder="Password" />
          <span class="error-message">Please enter your user name</span>
        </div>
        <div class="remainder-box">
          <input type="checkbox"  id="ramainder" />
          <label for="ramainder"> I have a bike</label>
        </div>
        <div class="btn-box" @click="controlLoading">
            <span v-show="!loading">Sign in</span>
           <span  v-show="loading">
            <Icon
            v-show="loading"
              class="fluid_icon"
              icon="svg-spinners:bars-rotate-fade"
              width="26"
              color="#fff"
            />
           </span>
        </div>

        <div class="auth-link">
          Don't have an account yet? <span>Sign up</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

import { ref } from "vue";
import { Icon } from "@iconify/vue";
let loading = ref(false);
let error_msg = ref(null);

function controlLoading() {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
    }, 4000);
}

</script>
<style lang="scss" scoped>
.login-page-v2 {
  width: 100%;
  min-height: 100vh !important;
  display: flex;
  .page-cover {
    width: calc(100% - 560px);
    min-height: 100% !important;
    background: url("https://elstar.themenate.net/img/others/auth-cover-bg.jpg");
  }
  .login-container {
    width: 560px;
    min-height: 100% !important;
    display: flex;
    align-items: center;

    .form-box {
      padding: 80px;
      width: 100%;
      display: flex;
      flex-direction: column;
      & > div {
        width: 100%;
      }

      .title {
        font-size: 24px;
        color: #111827;
      }
      .subtitle {
        font-size: 14px;
        color: #6b84b1;
        margin-bottom: 20px;
      }

      .input-box {
        height: 80px;
        display: flex;
        flex-direction: column;
        margin-top: 8px;
        .label {
          font-size: 14px;
          color: #5c5e5f;
          padding-left: 4px;
          font-weight: 500;
        }
        .input-text {
          display: block;
          width: 100%;
          min-height: 40px;
          border: 1px solid #d1d1d3;
          border-radius: 8px;
          padding: 4px 10px;
          font-size: 16px;
          color: #5c5e5f;

          &:focus{
            border: 1px solid #4F46E5;
            outline: 1px solid  #4F46E5;
          }
          &::placeholder{
            font-size: 16px;
          }
        }
        .error-message {
          font-size: 14px;
          font-weight: 400;
          padding-left: 4px;
          color: rgb(236, 57, 57);
          display: none;
          
        }
      }

      .remainder-box{
        padding: 6px;
        margin-top: 10px;
        input[type=checkbox]{
           width: 15px;
           height: 15px;
           background-color: #4F46E5;
        }
        label {
          font-size: 14px;
          padding-left: 4px;
        }
        
      }

      .btn-box{
        padding: 6px 20px;
        background-color: #4F46E5;
        color: #ffffff;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        cursor: pointer;
        &>span{
            display: flex;
        align-items: center;
        justify-content: center;
        }
        &:active{
            transform: scale(0.95);
        }
      }
      .auth-link{
        padding-left: 6px;
        font-size: 14px ;
        margin-top: 30px;
        cursor: pointer;
        span{
            color: #4F46E5;
        }
      }
    }
  }
}

@media (min-width:991.1px) and (max-width:1400px){
    .login-page-v2{
        .page-cover{
            width: calc(100% - 460px) !important;
        }
        .login-container{
            width: 460px !important;
            .form-box{
                padding: 50px !important;
            }
        }
    }
}
@media (max-width:991px){
    .login-page-v2{
        .page-cover{
            width: calc(100% - 460px) !important;
            display: none !important;
        }
        .login-container{
            width: 100% !important;
            justify-content: center;
            .form-box{
                width: 100%; 
                max-width: 400px;
                padding: 30px !important;
            }
        }
    }
}
</style>