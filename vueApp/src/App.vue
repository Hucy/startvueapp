<template>
    <div class="appwrap">
        <router-view></router-view>
    </div>

</template>

<script>

export default {

}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    background: #eeeeee;
}
ul,li{
    list-style: none;
}
a,a:link,a:active{
    color: #040000;
}
a,a:hover{
    text-decoration: none;
}
.appwrap{
    background: #eeeeee;
    font-size: 32/64rem;
    line-height: 1.5;
    color: #040000;
}
</style>
