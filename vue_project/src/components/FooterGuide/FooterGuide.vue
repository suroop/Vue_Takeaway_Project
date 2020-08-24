<template>
    <div id="FooterGuide">
      <ul>
        <li><router-link to='./msite'><i class="fa fa-home fa-2x"></i><span>Home</span></router-link></li>
        <li><router-link to='./search'><i class="fa fa-search fa-2x"></i><span>Search</span></router-link></li>
        <li><router-link to='./order'><i class="fa fa-coffee fa-2x"></i><span>Order</span></router-link></li>
        <li><router-link to='./profile'><i class="fa fa-user fa-2x"></i><span>Profile</span></router-link></li>
      </ul>
    </div>
</template>

<script>

    export default {
      name: "FooterGuide",

    }
</script>

<style lang="scss" rel="stylesheet/scss">
@import "src/common/scss/mixins";
  #FooterGuide{
    border-top: 1px solid #dddddd;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    ul{
      @include FlexBox(row,space-around,center);
      height: 100%;
      width: 100%;
      li{
        height: 100%;
        span{
          font-size: 0.9em;
          font-family:'Microsoft Yahei', 'Microsoft JhengHei',serif;
          color: #989898;
        }
        .router-link-active{
          color: #00926D;
        }
        a{
          margin: 5px 0;
          @include FlexBox(column,space-around,center);
          color: #989898;
        }
      }
    }
  }

</style>
