<template>
    <div class="grid">
        <div class="col-12">
            <h2>Transition page</h2>
            <button @click="show = !show">Toggle</button>
            <Transition>
                <p v-if="show">hello</p>
            </Transition>

            <div class="btn-container">
                <Transition name="slide-up">
                    <button v-if="docState == 'new'" @click="docState = 'save'">New</button>
                    <button v-else-if="docState == 'save'" @click="docState = 'edit'">Save</button>
                    <button v-else-if="docState == 'edit'" @click="docState = 'new'">Edit</button>
                </Transition>
            </div>
        </div>
        <div class="col-12">
            <div class="jr-breadcump">
              
                <div class="jr-breadcump-title">
                    Transition page title
                </div>
               
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
            docState: 'new'
        }
    }
}
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateX(40px);
}


.btn-container {
    display: inline-block;
    position: relative;
    height: 50px;
    padding: 20px;
    width: 100px;
    overflow: hidden;

    &>button {
        position: absolute;
    }
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all .25s ease-out;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

.jr-breadcump{
    width: 100%;
    display: block;
    min-height: 40px;
    max-height: 40px;
    padding: 5px;
    .jr-breadcump-title{
        color: rgb(1, 32, 53);
        font-size: 26px;
        font-weight: 700;
        animation: transform-text 0.3s ease 0s 1 forwards;

    }

    @keyframes transform-text {
        0%{
            opacity: 0;
            transform: translateY(-50px);
        }
        80%{
            opacity: 0.9;
            transform: translateY(5px);
        }
        100%{
            opacity: 1;
            transform: translateY(0px);
        }
    }
}
</style>