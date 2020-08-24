<template>
  <div id="HeaderGuide">
    <slot name="Back"></slot>
    <slot name="Content"></slot>
    <slot name="LoginSign"></slot>
  </div>
</template>

<script>
    export default {
        name: "HeaderGuider"
    }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "src/common/scss/mixins";
  #HeaderGuide{
    border-bottom: 1px solid #dddddd;
    position: relative;
    top: 0;
    width: 100%;
    height: 35px;
    background-color: #009474;
    @include FlexBox(row,space-between,center);
  }
</style>
