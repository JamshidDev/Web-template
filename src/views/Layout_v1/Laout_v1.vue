<template>
    <div class="layout_container_v1">
        <div class="sidebar_section">

        </div>
        <div class="main_section">

        </div>

    </div>
</template>

<script>

</script>

<style lang="scss" scoped>

$sidebar_width:260px;

.layout_container_v1{
    width: 100% !important;
    min-height: 100vh !important;
    display: flex;
    position: relative !important;

    &> .sidebar_section{
        width: $sidebar_width !important;
        min-width: $sidebar_width !important;
        min-height: 100vh;
        background-color: rgb(23, 195, 112);
    }

    &> .main_section{
        width:calc(100% - $sidebar_width) !important;
        min-width:calc(100% - $sidebar_width) !important;
        min-height: 100vh;
        overflow: hidden;
        background-color: rgb(6, 96, 110);
    }

}
</style>