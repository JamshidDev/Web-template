<template>
  <div :class="layout_class">

    <div class="sidebar_section">
       <navbar-version></navbar-version>
    </div>


    <div class="main_section">

      <div class="main_section_top">
        <div class="sidibar_control_btn" @click="control_sidebar()">
          <i class="pi pi-bars"> </i>
        </div>
        <span>{{ SCREEN_WIDTH }}</span>
      </div>
      <div class="main_section_main">
        <p>Main section</p>
      </div>


    </div>
    <div @click="control_sidebar()" v-show="sidebar && SCREEN_WIDTH<mobile_screen_width " class="mobile_overal"></div>
  </div>
</template>

<script>
import NavbarVersion from '../Navbar_v1/NavbarVersion.vue'
export default {
    components:{
        NavbarVersion,
    },
  data() {
    return {
      sidebar: false,
      sidebar_static: false,
      sidebar_overal: true,
      mobile_screen_width: 991,
      SCREEN_WIDTH:0,
    };
  },
  computed: {
    layout_class() {
      return [
        "layout_wrapper_v1",
        {
          open_sidebar: this.sidebar,
          close_sidebar: !this.sidebar,
          sidebar_static:this.SCREEN_WIDTH>this.mobile_screen_width,
          sidebar_overal:this.SCREEN_WIDTH<this.mobile_screen_width,
        },
      ];
    },
  },
  methods: {
    control_sidebar() {
        localStorage.setItem('navbar_v1', JSON.stringify(!this.sidebar))
      this.sidebar = !this.sidebar;
    },
  },
  created(){
    this.SCREEN_WIDTH = window.screen.width;
    window.addEventListener("resize", (event) => {
    this.SCREEN_WIDTH= event.currentTarget.innerWidth;

});

this.sidebar = localStorage.getItem('navbar_v1')? JSON.parse(localStorage.getItem('navbar_v1')) : false;
  }
};
</script>

<style lang="scss" scoped>
$sidebar_width: 260px;
$sidebar_animation: all 225ms cubic-bezier(0, 0, 0.2, 1);

.layout_wrapper_v1 {
  width: 100% !important;
  min-height: 100vh !important;
  display: flex;
  position: relative !important;

  & > .sidebar_section {
    width: $sidebar_width !important;
    min-width: $sidebar_width !important;
    min-height: 100vh;
    max-height: 100vh;
    background-color: #111827;
    transition: $sidebar_animation;
    overflow-y: auto;
    &::-webkit-scrollbar {
  width: 10px;
}
  }

  & > .main_section {
    min-height: 100vh;
    overflow: hidden;
    background-color: #f1f5f9;
    transition: $sidebar_animation;

    & > .main_section_top {
      width: 100% !important;
      height: 60px;
      background-color: #ffffff;
      display: flex;
      justify-content: start;
      align-items: center;
      box-shadow: rgb(17 17 26 / 7%) 0px 1px 0px,
        rgb(17 17 26 / 10%) 0px 8px 24px, rgb(17 17 26 / 10%) 0px 8px 14px 3px;

      & > .sidibar_control_btn {
        margin-left: 20px;
        padding: 10px 10px;
        border-radius: 40px;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        i {
          font-size: 20px;
        }
        &:hover {
          background-color: #b1b1b15c;
        }
      }
    }

    &> .main_section_main{
        padding: 50px;
    }
  }

  &> .mobile_overal{
    position: fixed;
    top: 0px;
    right: 0px;
    width:100% !important;
    min-height: 100vh;
    z-index: 9 !important;
    background: rgba(0, 0, 0, 0.5);

  }
  
}

.sidebar_static {
  & > .sidebar_section {
    position: absolute;
    top: 0px;
  }

  & > .main_section {
    position: absolute;
    top: 0px;
    right: 0px;
  }
}

.open_sidebar {
  & > .sidebar_section {
    left: 0px;
  }
  & > .main_section {
    width: calc(100% - $sidebar_width) !important;
  }
}

.close_sidebar {
  & > .sidebar_section {
    left: -$sidebar_width !important;
  }
  & > .main_section {
    width: 100% !important;
  }
}

.sidebar_overal {
  & > .sidebar_section {
    position: fixed;
    z-index: 10;
    top: 0px;
  }

  & > .main_section {
    position: fixed;
    width: calc(100% - 0px) !important;
    top: 0px;
    right: 0px;
    z-index: 9;
  }
}

@media (min-width: 0px) and (max-width: 991px) {
    .main_section_top{
        height:50px !important;
        max-height: 50px !important;
    }
}
</style>