<template>
    <div class="layout_page_v2">
        <div class="sidebar_container" :class="[mobile_menu ? 'close' : 'open']">
            <ul class="logo-content">
                <li class="logo-picture" @click="controlMenu()">
                    <img src="https://themesbrand.com/velzon/assets/images/logo-sm.png" alt="">
                </li>
                <li class="logo-title">Kadr system</li>
            </ul>
            <ul class="sidebar-main">
                <span v-for="sidebar in navbar_Items" :key="sidebar.to">
                    <template v-if="sidebar?.items">
                        <li class="item" :class="active_index == sidebar.to && 'show'">


                            <div class="main-header" @click="goPush(sidebar.to)">
                                <i :class="sidebar.icon" class='item-icon'></i>
                                <span class="item-title">{{ sidebar.label }}</span>
                                <i class='bx bx-chevron-down arrow'></i>
                            </div>


                            <ul class="sub-menu"
                                :style="`height:${active_index == sidebar.to && !mobile_menu ? sidebar.items.length * 40 + 'px' : '0px'}`">
                                <li class="sub-menu-header">{{ sidebar.label }}</li>
                                <li v-for="submenu in sidebar.items" :key="submenu.to" class="sub-menu-link"> {{
                                    submenu.label }}</li>
                            </ul>
                        </li>
                    </template>
                    <template v-if="!sidebar?.items">
                        <li class="item" :class="menu_id == 2 && 'show'">
                            <div class="main-header" @click="goPush(sidebar.to)">
                                <i :class="sidebar.icon" class='item-icon'></i>
                                <span class="item-title">{{ sidebar.label }}</span>
                            </div>
                            <ul class="sub-menu">
                                <li class="sub-menu-header"> {{ sidebar.label }}</li>
                            </ul>
                        </li>
                    </template>


                </span>

            </ul>


        </div>
        <div class="layout-main-container" :class="[mobile_menu ? 'close' : 'open']">
            <div class="main-toolbar">

            </div>
            <h4 class="test-content">Main section</h4>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mobile_menu: false,
            menu_id: 0,
            active_index: 0,
            navbar_Items: [
                {
                    label: "Global",
                    to: "1-1",
                    icon: "bx bx-globe",

                    visibl: true,
                    items: [
                        {
                            label: "Statistika",
                            to: "1-3",
                            icon: "pi pi-envelope",
                            visibl: true,
                            isNews: "Yangi",
                        },
                        {
                            label: "Korxonalar",
                            to: "1-4",
                            icon: "pi pi-globe",
                            visibl: true,
                        },
                        {
                            label: "Shtatlar",
                            to: "1-4",
                            icon: "pi pi-globe",
                            visibl: true,
                        },
                        {
                            label: "Qidiruv",
                            to: "1-4",
                            icon: "pi pi-globe",
                            visibl: true,
                        },
                        {
                            label: "Analitika",
                            to: "1-4",
                            icon: "pi pi-globe",
                            visibl: true,
                        },
                        {
                            label: "Turniket",
                            to: "1-4",
                            icon: "pi pi-globe",
                            visibl: true,
                        },
                        {
                            label: "Hujjatlar",
                            to: "1-4",
                            icon: "pi pi-globe",
                            visibl: true,
                        },
                    ]
                },
                {
                    label: "Korxona",
                    to: "1-4",
                    icon: "bx bx-home-alt",
                    visibl: true,
                    items: [
                        {
                            label: "Xodimlar",
                            to: "1-3",
                            icon: "pi pi-envelope",
                            visibl: true,
                            isNews: "Yangi",
                        },
                        {
                            label: "Shtatlar",
                            to: "1-4",
                            icon: "pi pi-globe",
                            visibl: true,
                        },
                        {
                            label: "Bo'limlar",
                            to: "1-4",
                            icon: "pi pi-globe",
                            visibl: true,
                        },
                    ]
                },

                {
                    label: "Qurilmalar",
                    to: "1-2",
                    icon: "bx bxs-message-alt-dots",
                    visibl: true,
                },
                {
                    label: "Sms xabar",
                    to: "1-3",
                    icon: "bx bxs-grid",
                    visibl: true,
                    isNews: "Yangi",
                },
                {
                    label: "Qidiruv",
                    to: "1-4",
                    icon: "bx bxs-layout",
                    visibl: true,
                },
                {
                    label: "Sozlamalar",
                    to: "1-4",
                    icon: "bx bx-cog",
                    visibl: true,
                },
                {
                    label: "Chart",
                    to: "1-4",
                    icon: "bx bx-network-chart",
                    visibl: true,
                },
                {
                    label: "Qo'llanma",
                    to: "1-4",
                    icon: "bx bxs-book-bookmark",
                    visibl: true,
                },
                {
                    label: "Chart",
                    to: "1-4",
                    icon: "bx bx-network-chart",
                    visibl: true,
                },
                {
                    label: "Qo'llanma",
                    to: "1-4",
                    icon: "bx bxs-book-bookmark",
                    visibl: true,
                },
                {
                    label: "Chart",
                    to: "1-4",
                    icon: "bx bx-network-chart",
                    visibl: true,
                },
                {
                    label: "Qo'llanma",
                    to: "1-4",
                    icon: "bx bxs-book-bookmark",
                    visibl: true,
                },
                {
                    label: "Share",
                    to: "1-9",
                    icon: "bx bx-share-alt",

                    visibl: true,
                    items: [
                        {
                            label: "Statistika",
                            to: "1-3",
                            icon: "pi pi-envelope",
                            visibl: true,
                            isNews: "Yangi",
                        },
                        {
                            label: "Korxonalar",
                            to: "1-4",
                            icon: "pi pi-globe",
                            visibl: true,
                        },
                        {
                            label: "Shtatlar",
                            to: "1-4",
                            icon: "pi pi-globe",
                            visibl: true,
                        },
                        {
                            label: "Qidiruv",
                            to: "1-4",
                            icon: "pi pi-globe",
                            visibl: true,
                        },
                        {
                            label: "Analitika",
                            to: "1-4",
                            icon: "pi pi-globe",
                            visibl: true,
                        },
                        {
                            label: "Turniket",
                            to: "1-4",
                            icon: "pi pi-globe",
                            visibl: true,
                        },
                        {
                            label: "Hujjatlar",
                            to: "1-4",
                            icon: "pi pi-globe",
                            visibl: true,
                        },
                    ]
                },
                {
                    label: "Chart",
                    to: "1-4",
                    icon: "bx bx-network-chart",
                    visibl: true,
                },
                {
                    label: "Qo'llanma",
                    to: "1-4",
                    icon: "bx bxs-book-bookmark",
                    visibl: true,
                },
                {
                    label: "Chart",
                    to: "1-4",
                    icon: "bx bx-network-chart",
                    visibl: true,
                },
                {
                    label: "Qo'llanma",
                    to: "1-4",
                    icon: "bx bxs-book-bookmark",
                    visibl: true,
                },
                {
                    label: "Chart",
                    to: "1-4",
                    icon: "bx bx-network-chart",
                    visibl: true,
                },
                {
                    label: "Qo'llanma",
                    to: "1-4",
                    icon: "bx bxs-book-bookmark",
                    visibl: true,
                },
                {
                    label: "Chart",
                    to: "1-4",
                    icon: "bx bx-network-chart",
                    visibl: true,
                },
                {
                    label: "Qo'llanma",
                    to: "1-4",
                    icon: "bx bxs-book-bookmark",
                    visibl: true,
                },
            ],
            SCREEN_WIDTH: window.innerWidth,
            SCREEN_HEIGHT: window.innerHeight,
            mobile_screen_width:991,
        }
    },
    watch:{
        SCREEN_WIDTH(screen){
            if(screen>this.mobile_screen_width){
                this.mobile_menu = false
            }else{
                this.mobile_menu = true
            }
        }
    },
    methods: {
        goPush(id) {
            console.log(id);
            if (id == this.active_index) {
                this.active_index = 0;
            } else {
                this.active_index = id;
            }

        },
        controlMenu() {
            this.mobile_menu = !this.mobile_menu;
        }
    },
    created() {

       
        window.addEventListener("resize", (event) => {
            this.SCREEN_WIDTH = event.currentTarget.innerWidth;
            this.SCREEN_HEIGHT = event.currentTarget.innerHeight;
        })
        console.log(this.SCREEN_WIDTH);

        if(this.SCREEN_WIDTH<this.mobile_screen_width){
            this.mobile_menu = true
        }

       
    }
}
</script>

<style lang="scss" scoped>
$sidebar-width: 250px;
$sidebar-min-width: 65px;
$sidebar-bg-color: #2a3042;
// $sidebar-bg-color: #556ee6;
$text-color: #a6b0cf;

.layout_page_v2 {
    position: relative;
    display: flex;
    width: 100%;
    min-height: 100vh !important;
    background-color: #f0f0f8;

    .sidebar_container {
        background-color: $sidebar-bg-color;
        box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 3%);
        transition: all 0.3s ease-in-out;


        .sidebar-main {
            &::-webkit-scrollbar {
                width: 6px;
            }

            &::-webkit-scrollbar-track {
                border-radius: 10px;
            }

            &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                background: #515870;
            }


            .item {
                width: 100%;
                color: $text-color;
                list-style: none;
                padding: 10px 20px;
                position: relative;

                .main-header {
                    display: flex;

                    .item-icon {
                        font-size: 18px;
                        padding: 0px 6px;
                        transition: all 0.3s ease-in-out;
                    }

                    .item-title {
                        font-size: 14px;
                        width: calc(100% - 60px);
                        padding-left: 15px;
                        transition: all 0.3s ease-in-out;
                        overflow: hidden;
                        white-space: nowrap;
                    }

                    .arrow {
                        font-size: 18px;
                        padding: 0px 6px;
                        transition: all 0.3s ease-in-out;
                    }
                }

                .sub-menu {
                    list-style: none;
                    width: 200px;
                    padding: 0px;
                    margin: 0px;
                    overflow: hidden;
                    height: 0px;


                    .sub-menu-link {
                        font-size: 14px;
                        padding: 10px 20px 10px 45px;
                        max-height: 40px;
                        cursor: pointer;

                    }

                    .sub-menu-header {
                        font-size: 15px;
                        padding: 10px 20px 10px 45px;
                        max-height: 40px;
                        cursor: pointer;
                    }
                }
            }
        }

        .logo-content {
            transition: all 0.2s ease-in-out;

            .logo-picture img {
                transition: all 0.2s ease-in-out;
            }

            .logo-title {
                transition: all 0.2s ease-in-out;
            }
        }


    }

    // Open sidebar
    .sidebar_container.open {
        width: $sidebar-width;
        overflow: hidden;
        box-sizing: border-box;

        .sidebar-main {
            overflow-y: auto;
            width: 100%;
            padding: 0px;
            display: flex;
            flex-direction: column;
            min-height: calc(100vh - 80px);
            max-height: calc(100vh - 80px);
            padding-bottom: 40px;
        }

        .sidebar-main .item {
            &:hover {
                // background-color: #363d54;
                cursor: pointer;
            }

            .arrow {
                transition: all 0.3s ease-in-out;
            }

            .item-title {
                font-size: 15px;
            }
        }

        .sidebar-main .item .sub-menu {
            list-style: none;
            width: 200px;
            padding: 0px;
            margin: 0px;
            overflow: hidden;
            height: 0px;
            transition: all 0.3s ease-in-out;

            .sub-menu-link {
                font-size: 13px;
                padding: 10px 20px 10px 45px;
                max-height: 40px;
                opacity: 0;
                transition: all 0.4s ease-in-out;
                position: relative;
                left: -20px;
            }

            .sub-menu-header {
                display: none;
            }

        }

        // logo 
        .logo-content {
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 0px;
            width: 100%;

            .logo-picture img {
                width: 24px;
            }

            .logo-title {
                font-size: 16px;
                text-transform: uppercase;
                color: #fff;
                overflow: hidden;
                white-space: nowrap;



            }
        }
    }

    // open show
    .sidebar_container.open .sidebar-main .item.show {

        .arrow,
        .item-icon,
        .item-title {
            color: #fff;
        }

        .arrow {
            transform: rotate(180deg);
        }




        .sub-menu {
            height: 240px;

            .sub-menu-link {
                opacity: 1;
                left: 0px;

            }

            .sub-menu-link {
                &:hover {
                    color: #fff;
                }
            }

        }
    }

    // Close sidebar
    .sidebar_container.close {
        .logo-content {
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 0px;
            width: 100%;

            .logo-picture img {
                width: 24px;
            }

            .logo-title {
                display: none;
                font-size: 16px;
                text-transform: uppercase;
                color: #fff;


            }
        }

        .sidebar-main {
            width: 100%;
            padding: 0px;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            padding-bottom: 40px;
        }

        .sidebar-main .item {
            max-height: 40px;

            .sub-menu {
                top: 25px;
                left: 100%;
                opacity: 0;
                border-radius: 0px 6px 6px 0px;
                transition: all 0.3s ease-out;
                position: absolute;

                .sub-menu-header {
                    font-size: 12px;
                    color: #fff;
                    border-bottom: 1px solid #2a3042;
                }
            }

            &:hover {
                background-color: #363d54;
                border-bottom: 1px solid #2a3042;
                cursor: pointer;

                .sub-menu {

                    background-color: #363d54;
                    left: 100%;
                    top: 0px;
                    height: auto !important;
                    opacity: 1;

                    .sub-menu-link {
                        &:hover {
                            color: #fff;
                        }
                    }

                }
            }
        }

    }

    .sidebar_container.close {
        width: $sidebar-min-width;

        .sidebar-main .item .item-title {
            opacity: 0;
            pointer-events: none;
        }

        .sidebar-main .item .arrow {
            opacity: 0;
            pointer-events: none;
        }
    }

}

.layout-main-container {
    transition: all 0.3s ease-in-out;
}


// Control main section overwiev
.layout-main-container {
    .main-toolbar {
        width: 100%;
        height: 60px;
        background-color: #fff;
        box-shadow: 0 1px 2px rgb(56 65 74 / 15%);

    }
}

.layout-main-container.open {
    width: calc(100% - $sidebar-width) !important;
    min-height: 100vh !important;
    max-height: 100vh !important;
    overflow-y: auto;

    .test-content {
        width: 100%;
        height: 200vh;
    }

}

.layout-main-container.close {
    width: calc(100% - $sidebar-min-width) !important;
    min-height: 100vh !important;
    height: 100% !important;

    .test-content {
        width: 100%;
        height: 200vh;
    }
}</style>