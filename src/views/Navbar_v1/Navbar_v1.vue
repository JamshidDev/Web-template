<template>
  <div
    class="flex justify-content-center align-items-center w-full bg-primary p-8"
  >
    <div class="navbar_container">
      <div class="navbar" v-for="nav_Items in navbar_Items" :key="nav_Items.to">
        <span class="navbar_label">{{ nav_Items.label }}</span>
        <span v-if="nav_Items?.sub_label" class="navbar_sublabel">{{
          nav_Items?.sub_label
        }}</span>
        
        <!-- Item -->
        <template v-for="items in nav_Items.items" :key="items.to">
          <!-- Items child -->
          <template v-if="items?.items2">
            <span
              class="navbar_panel"
              @click="menu_items(items.to, items.to)"
              :class="[active_Index == items.to && 'navbar_panel_active']"
              :style="{
                height:
                  active_Index.slice(0, 3) == items.to
                    ? calculate_height(items.items2)
                    : '45px',
              }"
              v-show="panel_visibl(items.items2)"
            >
              <div
                class="navbar_items"
                :class="[
                  active_Index.slice(0, 3) == items.to && 'navbar_items_active',
                  active_Index == items.to && 'navbar_items_active_bg',
                ]"
              >
                <div class="navbar_items_icon">
                  <ieslint :class="[items.icon]"></ieslint>
                </div>
                <div class="navbar_items_text">
                  <span class="navbar_items_text_content">{{
                    items.label
                  }}</span>
                  <span class="navbar_items_text_icon">
                    <i
                      class="pi pi-angle-right"
                      @click.stop="menu_items('0', '0')"
                    ></i>
                  </span>
                </div>
              </div>
              <div
                class="navbar_sub_items"
                v-for="sub_items in items.items2"
                :key="sub_items.to"
                @click.stop="menu_items(sub_items.to, sub_items.to)"
                :class="[
                  active_Index == sub_items.to && 'navbar_active_bg_color',
                ]"
                v-show="sub_items.visibl"
              >
                <div class="navbar_sub_items_text">
                  <span class="navbar_sub_items_text_content">{{
                    sub_items.label
                  }}</span>
                  <span
                    v-show="sub_items?.isNews"
                    class="navbar_sub_items_text_news"
                    >{{ sub_items?.isNews }}</span
                  >
                </div>
              </div>
            </span>
          </template>

          <!-- Item -->
          <template v-if="!items?.items2">
            <div
              class="navbar_item"
              @click="menu_items(items.to, items.to)"
              :class="[active_Index == items.to && 'navbar_item_active']"
              v-show="items.visibl"
            >
              <div class="navbar_item_icon">
                <i :class="[items.icon]"></i>
              </div>
              <div class="navbar_item_text">
                <span class="navbar_item_text_content">{{ items.label }}</span>
                <span v-show="items?.isNews" class="navbar_item_text_news">{{
                  items?.isNews
                }}</span>
              </div>
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navbar_Items: [
        {
          label: "Raxbar kadrlar",
          sub_label: "Biriktirilgan korxonalar",
          to: "1",
          icon: "pi pi-refresh",
          visibl: true,
          items: [
            {
              label: "Xabarlar",
              to: "1-1",
              icon: "pi pi-comments",
              visibl: true,
            },
            {
              label: "Qurilmalar",
              to: "1-2",
              icon: "pi pi-desktop",
              visibl: true,
            },
            {
              label: "Sms xabar",
              to: "1-3",
              icon: "pi pi-envelope",
              visibl: true,
              isNews: "Yangi",
            },
            {
              label: "Qidiruv",
              to: "1-4",
              icon: "pi pi-globe",
              visibl: true,
            },
          ],
        },
        {
          label: "Raxbar kadrlar",
          sub_label: "Biriktirilgan korxonalar",
          to: "2",
          icon: "pi pi-qrcode",
          visibl: true,
          items: [
            {
              label: "Sub item 1",
              to: "2-1",
              icon: "pi pi-qrcode",
              visibl: true,
            },
            {
              label: "Sub item 2",
              to: "2-2",
              icon: "pi pi-qrcode",
              visibl: true,
            },
          ],
        },
        {
          label: "Arxiv bo'lim",
          to: "3",
          icon: "pi pi-refresh",
          visibl: true,
          items: [
            {
              label: "Arxivdagi xodimlar",
              to: "3-1",
              icon: "pi pi-refresh",
              visibl: true,
              items2: [
                {
                  label: "Arxivdagi xodimlar 0",
                  to: "3-1-1",
                  icon: "pi pi-refresh 0",
                  visibl: false,
                },
                {
                  label: "Arxivdagi xodimlar 0",
                  to: "3-1-2",
                  icon: "pi pi-refresh",
                  visibl: false,
                },
                {
                  label: "Arxivdagi xodimlar 0",
                  to: "3-1-3",
                  icon: "pi pi-refresh",
                  visibl: true,
                },
              ],
            },
            {
              label: "Xavsizlik",
              to: "3-2",
              icon: "pi pi-shield",
              visibl: true,
            },
            {
              label: "Arxiv bo'limlar",
              to: "3-3",
              icon: "pi pi-th-large",
              visibl: true,
              items2: [
                {
                  label: "Arxivdagi xodimlar",
                  to: "3-3-1",
                  icon: "pi pi-refresh",
                  visibl: true,
                },
                {
                  label: "Arxivdagi xodimlar",
                  to: "3-3-2",
                  icon: "pi pi-refresh",
                  visibl: true,
                },
                {
                  label: "Arxivdagi xodimlar",
                  to: "3-3-3",
                  icon: "pi pi-refresh",
                  visibl: true,
                },
                {
                  label: "Arxivdagi xodimlar",
                  to: "3-3-4",
                  icon: "pi pi-refresh",
                  visibl: true,
                },
                {
                  label: "Arxivdagi xodimlar 1",
                  to: "3-3-5",
                  icon: "pi pi-refresh",
                  visibl: false,
                },
                {
                  label: "Arxivdagi xodimlar 2",
                  to: "3-3-6",
                  icon: "pi pi-refresh",
                  visibl: false,
                },
              ],
            },
            {
              label: "Statistika",
              to: "3-4",
              icon: "pi pi-shield",
              visibl: true,
            },
            {
              label: "Adminlar",
              to: "3-5",
              icon: "pi pi-shield",
              visibl: true,
            },
          ],
        },
      ],
      active_Index: "3-3-2",
    };
  },
  methods: {
    menu_items(link, index) {
      console.log(link);
      console.log(index.slice(0, 3) == this.active_Index);
      this.active_Index = index;
    },
    calculate_height(items) {
      let item_count = items.filter((item) => item.visibl).length + 1;
      return `${item_count * (45 + 4)}px`;
    },
    panel_visibl(items) {
      let active_items_count = items.filter((item) => item.visibl).length;
      return active_items_count > 0 ? true : false;
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
$bg_color: #111827;
$text_color: #ffffffb3;

$navbar-width: 280px;
$navbar_padding: 0px 8px 40px 8px;
$navbar_bg_color: #111827;

$navbar_label_color: #2262c6;
$navbar_sublabel_color: #9ca3af;

$navbar_item_text_color: #9ca3af;
$navbar_item_icon_color: #9ca3af;

$navbar_active_bg_color: #ffffff0d;
$navbar_active_text_color: #ffffff;

$navbat_item_padding: 10px 16px;
$navbat_label_padding: 0px 16px;
$navbat_sublabel_padding: 0px 16px;

.navbar_container {
  max-width: $navbar-width;
  width: $navbar-width !important;
  display: flex;
  flex-direction: column;
  padding: $navbar_padding;
  background-color: $navbar_bg_color !important;

  & > .navbar {
    width: 100%;
    overflow: hidden;

    & > .navbar_label {
      display: block !important;
      font-size: 12px;
      font-weight: 600 !important;
      color: $navbar_label_color;
      text-transform: uppercase;
      padding: $navbat_label_padding;
      margin-top: 30px;
    }

    & > .navbar_sublabel {
      display: block !important;
      color: $navbar_sublabel_color;
      font-weight: 400;
      font-size: 11px;
      padding: $navbat_sublabel_padding;
      margin-bottom: 10px;
    }

    & > .navbar_item {
      display: flex;
      width: 100%;
      padding: $navbat_item_padding;
      margin: 2px 0px;

      &:hover {
        cursor: pointer;
        background-color: $navbar_active_bg_color !important;
        border-radius: 4px;
        & > .navbar_item_text > .navbar_item_text_content {
          color: $navbar_active_text_color !important;
        }
        & > .navbar_item_icon > i {
          color: $navbar_active_text_color !important;
        }
      }

      & > .navbar_item_icon {
        width: 40px;
        height: 24px;
        display: flex;
        justify-content: start;
        align-items: center;
        color: $navbar_item_icon_color;
      }

      & > .navbar_item_text {
        width: calc(100% - 40px);
        color: $navbar_item_text_color;
        display: flex;
        position: relative !important;

        & > .navbar_item_text_content {
          font-size: 15px;
        }

        & > .navbar_item_text_news {
          font-size: 10px;
          color: #0bd215e4;
          background-color: #0bd21520;
          padding: 2px 6px;
          border: 1px solid #0bd215e4;
          border-radius: 6px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 1px;
          right: 0px;
        }
      }
    }

    & > .navbar_item_active {
      cursor: pointer;
      background-color: $navbar_active_bg_color !important;
      border-radius: 4px;
      & > .navbar_item_text > .navbar_item_text_content {
        color: $navbar_active_text_color !important;
      }
      & > .navbar_item_icon > i {
        color: $navbar_active_text_color !important;
      }
    }
    & > .navbar_panel {
      display: block;
      height: 45px;
      overflow: hidden;
      transition: all 0.3s ease;

      & > .navbar_items {
        display: flex;
        width: 100%;
        margin: 2px 0px;
        padding: $navbat_item_padding;
        overflow: hidden;
        height: 45px;

        &:hover {
          cursor: pointer;
          background-color: $navbar_active_bg_color !important;
          border-radius: 4px;
          & > .navbar_items_text > .navbar_items_text_content {
            color: $navbar_active_text_color !important;
          }
          & > .navbar_items_icon > i {
            color: $navbar_active_text_color !important;
          }
        }

        & > .navbar_items_icon {
          width: 40px;
          height: 24px;
          display: flex;
          justify-content: start;
          align-items: center;
          color: $navbar_item_icon_color;
        }

        & > .navbar_items_text {
          width: calc(100% - 40px);
          color: $navbar_item_text_color;
          display: flex;
          position: relative !important;

          & > .navbar_items_text_content {
            font-size: 15px;
          }

          & > .navbar_items_text_icon {
            display: flex;
            justify-content: end;
            align-items: center;
            position: absolute;
            top: 2px;
            right: 0px;

            & > i {
              font-size: 20px;
              transition: all 0.2s linear;
            }
          }
        }
      }

      & > .navbar_sub_items {
        display: flex;
        width: 100%;
        margin: 2px 0px;
        padding: $navbat_item_padding;
        overflow: hidden;
        height: 45px;

        &:hover {
          cursor: pointer;
          background-color: $navbar_active_bg_color !important;
          border-radius: 4px;
          & > .navbar_sub_items_text > .navbar_sub_items_text_content {
            color: $navbar_active_text_color !important;
          }
        }

        & > .navbar_sub_items_text {
          width: calc(100% - 0px);
          color: $navbar_item_text_color;
          display: flex;
          position: relative !important;

          & > .navbar_sub_items_text_content {
            font-size: 14px;
            padding-left: 50px;
          }
        }
      }

      & > .navbar_items_active {
        & > .navbar_items_text > .navbar_items_text_icon > i {
          transform: rotate(90deg);
        }
      }
      & > .navbar_items_active_bg {
        background-color: #ffffff0d !important;
        border-radius: 4px;
      }
    }

    .navbar_active_bg_color {
      background-color: #ffffff0d !important;
      border-radius: 4px;
    }
  }
}
</style>
