<template>
  <div class="login-page-v1">
    <div class="login-form">
        <div class="form-header">
            <div class="title">
                Sign in
            </div>
            <div class="subtitle">
                Forgot password?
            </div>
        </div>
        <div class="form-body">
            <div class="title">Jamacoder</div>
            <div class="subtitle">Welcome, please login.</div>
            <div class="input-box">
                <input class="text-input" type="text" placeholder="Username">
            </div>
            <div class="input-box">
                <input class="text-input" type="password" placeholder="Password">
            </div>
            <div class="form-btn">
                <div class="submit-btn" @click="controlLoading()">
                    sign in
                    <Icon class="fluid_icon" :icon="loading ? 'svg-spinners:bars-rotate-fade' : 'mdi:chevron-right'"
                        width="26" color="#34414e" />
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from "@iconify/vue"
let loading = ref(false)

function controlLoading(){
    loading.value = true;
    setTimeout(()=>{
        loading.value = false;
    },4000)
}

</script>

<style lang="scss" scoped>
.login-page-v1{
    display: flex;
    width: 100% !important;
    min-height: 100vh !important;
    justify-content: center;
    align-items: center;
    background-color: #EBEEF2;

    .login-form{
        width: 600px;
        border:1px solid #EBEEF2;
        border-radius: 10px;
        overflow: hidden;

        .form-header{
            width: 100%;
            height: 40px;
            background-color: #F6F7F9;

            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 20px;

            .title{
                text-transform: uppercase;
                font-size: 16px;
                font-weight: 600;
            }
            .subtitle{
                font-size: 14px;
                font-weight: 500;
                color: #495057;
            }
        }
        .form-body{
            background-color: #FFFFFF;
            padding: 80px 100px 40px 100px;

            .title{
                display: block;
                font-size: 28px;
                font-weight: 600;
                text-transform: uppercase;
            }
            .subtitle{
                display: block;
                font-size: 15px;
            }

            .input-box{
                margin-top: 30px;
                display: block;
                width: 100%;
                height: 40px;
                background-color: #EBEEF2;
                border-radius: 10px;
                .text-input{
                    width: 100%;
                    height: 100%;
                    background: transparent;
                    border: none;
                    padding: 4px 10px;
                    font-size: 16px;
                    color: #1EA6EC;
                    transition: all 0.3s ease;
                    border-bottom: 2px solid transparent;
                    border-radius: 10px;

                    &:focus{
                        outline: none;
                        border-bottom: 2px solid #34414e;
                    }
                    &::placeholder{
                        font-size: 16px;
                        color: #34414e;
                    }
                }
            }
            .form-btn{
                display: flex;
                width: 100%;

                .submit-btn{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 6px 30px;
                    text-transform: uppercase;
                    font-weight: 600;
                    border: 1px solid #A6BCEE;
                    background-color: #A6BCEE;
                    font-size: 14px;
                    margin-top: 40px;
                    border-radius: 4px;
                    cursor: pointer;
                }

            }
        }
        
    }
}

@media (max-width: 620px){
    .login-form{
        margin: 0px 20px;
        .form-body{
            padding: 80px 10% 40px 10% !important;
        }
    }
}
</style>