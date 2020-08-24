<template>
    <div id="Msite">
      <HeaderGuider>
        <div slot="Back" class="header-title title1"><i class="fa fa-search"></i></div>
        <div slot="Content" class="header-title title2">福建省三明市永安市</div>
        <div slot="LoginSign" class="header-title title1"><i class="fa fa-sign-in"></i>/<i class="fa fa-sign-out"></i></div>
      </HeaderGuider>
      <div id="serve"></div>
      <div id="store"></div>
    </div>
</template>

<script>
  import HeaderGuider from "../../components/HeaderGuide/HeaderGuider";
    export default {
      name: "Msite",
      components:{
          HeaderGuider
      }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
@import "src/common/scss/mixins";
  #Msite{
    .header-title{
      @include titleStyle(30%);
    }
    .title1{
      width: 10% !important;
    }
    .title2{
      width: 80% !important;
    }
    #serve{
      width: 100%;
      height: 40%;
      background-color: black;
    }
    #store{
      width: 100%;
      height: 50%;
      background-color: yellow;
    }
  }
</style>
