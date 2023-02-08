<template >
  <div class="locked-page">
    <div class="locked-container">
      <div class="locked-form">
        <div class="locked-icon">
          <Icon
            class="fluid_icon"
            icon="mdi:security"
            width="60"
            color="#34414e"
          />
        </div>
        <div class="locked-title">Account Locked</div>
        <div class="locked-subtitle">
          Please enter your password to unlock your account
        </div>
        <div class="user-avatar">
          <img src="https://exodim.railway.uz/storage/users/1.jpg" alt="" />
        </div>
        <div class="user-login">user@example.com</div>

        <div class="input-box" :class="[error_msg && 'error-input']">
          <input
            v-model="password"
            class="locked-input"
            type="text"
            placeholder="Password"
          />
          <span class="locked-error-message">{{ error_msg }}</span>
        </div>
        <div class="locked-btn">
          <div class="submit-btn" @click="controlLoading" :disabled="loading">
            Unlock

            <Icon
              class="fluid_icon"
              :icon="
                loading
                  ? 'svg-spinners:bars-rotate-fade'
                  : 'mdi:account-lock-open'
              "
              width="26"
              color="#fff"
            />
          </div>
        </div>
        <div class="version-info">Jamacoder Vue Edition 2.3.0 © 2023</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
let loading = ref(false);
let error_msg = ref(null);
let password = ref(null);

function controlLoading() {
  if (password.value) {
    error_msg.value = null;
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
    }, 4000);
  } else {
    error_msg.value = "Please enter your password";
  }
}
</script>
<style lang="scss" scoped>
.locked-page {
  width: 100%;
  min-height: 100vh;
  background: url("https://media.istockphoto.com/id/1397398956/photo/digital-shield-3d-rendering-stock-photo.jpg?b=1&s=170667a&w=0&k=20&c=gonGBjgSGHgYEbY5hUHrXRjm8NDY32yWuRKTlYtLRLQ=");
  background-size: cover;
  .locked-container {
    margin-top: 10%;
    background-color: #ffffff;
    .locked-form {
      display: flex;
      flex-direction: column;
      padding: 20px;
      max-width: 400px;
      margin: 0px auto;
      & > div {
        margin: 0px auto;
      }
    }
    .locked-title {
      font-size: 20px;
      font-weight: 600;
    }
    .locked-subtitle {
      font-size: 15px;
      font-weight: 400;
      margin-bottom: 50px !important;
      text-align: center;
    }
    .user-avatar {
      width: 90px;
      height: 90px;
      overflow: hidden;
      border-radius: 50%;
      & > img {
        width: 100%;
        object-fit: cover;
      }
    }
    .user-login {
      font-size: 14px;
      font-weight: 600;
      padding-top: 10px;
    }
    .error-input {
      background-color: #f8d4d4 !important;
      border: 1px solid #f8d4d4 !important;
      .locked-error-message {
        display: inline-block !important;
      }
    }
    .input-box {
      width: 100%;
      max-width: 500px;
      background-color: #ebeef2;
      height: 40px;
      border: 1px solid #ebeef2;
      border-radius: 10px;
      position: relative;
      margin-top: 20px !important;

      .locked-input {
        width: 100%;
        height: 100%;
        border: none;
        padding: 4px 15px;
        background-color: transparent;
        border: 1px solid transparent;
        font-size: 18px;
        &:focus {
          outline: none;
        }
      }
      .locked-error-message {
        position: absolute;
        top: 45px;
        left: 6px;
        font-size: 14px;
        color: #dc2626;
        z-index: 10;
        display: none;
      }
    }
    .locked-btn {
      margin-top: 40px !important;
      width: 100%;
      max-width: 500px;
      display: flex;
      .submit-btn {
        padding: 6px 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        background-color: #0b912f;
        color: white;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.2s ease-out;
        &:active{
            transform: scale(0.9);
        }
      }
    }
    .version-info {
      font-size: 13px;
      margin-top: 30px !important ;
      font-weight: 500;
    }
  }
}
</style>