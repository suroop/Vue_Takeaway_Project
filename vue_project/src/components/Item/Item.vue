<template>
  <div class="Item">
    <div class="img item"><div class="fake"></div></div>
    <div class="info item">
      <div><span class="brand">Brand</span><span class="desc">Jiahe Yipin (Wendu Water City)</span></div>
      <div><span>4.2&nbsp;</span>200 orders per month<span></span><span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-empty"></i><i class="fa fa-star-o"></i></span></div>
      <div><span>Food delivery from ¥20</span>/<span>Delivery fee ¥5</span></div>
    </div>
    <div class="-server item">
      <div class="txt1"><span>Guaranteed</span></div>
      <div class="txt2"><span>Special</span></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Item"
    }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "src/common/scss/mixins";
  .Item{
    width: 100%;
    height: 125px;
    border-bottom: 1px solid #dddddd;
    @include FlexBox(row,space-around,center);
    .img{
      width: 30%;
      .fake{
        width: 80%;
        height: 80%;
        margin:12.5px  auto ;
        background-color: yellow;
      }
    }
    .info{
      width: 50%;

      @include FlexBox(column,center,center);
      div{
        line-height: 31.25px;
        text-align: left;
        height: 25%;
        width: 100%;
        &:first-child{
          .brand{
            font-size: 0.5em;
          }
          .desc{
            font-size: 0.7em;
          }
        }
        &:last-child,&:nth-child(2){
          font-size: 0.5em;
        }
      }
    }
    .-server{
      width: 20%;
      @include FlexBox(column,space-around,space-around);
      div{
        font-size: 0.8em;
        span{
          border: 1px solid #dddddd;
          border-radius: 5px;
          padding: 5px;
        }
      }
    }
    .item{
      height: 100%;
    }
  }
</style>
