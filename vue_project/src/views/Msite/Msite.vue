<template>
    <div id="Msite">
      <HeaderGuider>
        <div slot="Back" class="header-title title1"><i class="fa fa-search"></i></div>
        <div slot="Content" class="header-title title2">福建省三明市永安市</div>
        <div slot="LoginSign" class="header-title title1"><i class="fa fa-sign-in"></i>/<i class="fa fa-sign-out"></i></div>
      </HeaderGuider>
      <div class="swiper-container">
        <div class="swiper-wrapper" id="serve">
          <div class="swiper-slide ">
            <div class="items">
              <div class="item1 item"><div class="fake"></div><p>item1</p></div>
              <div class="item2 item"><div class="fake"></div><p>item2</p></div>
              <div class="item3 item"><div class="fake"></div><p>item3</p></div>
              <div class="item4 item"><div class="fake"></div><p>item4</p></div>
              <div class="item5 item"><div class="fake"></div><p>item5</p></div>
              <div class="item6 item"><div class="fake"></div><p>item6</p></div>
              <div class="item7 item"><div class="fake"></div><p>item7</p></div>
              <div class="item8 item"><div class="fake"></div><p>item8</p></div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="items">
              <div class="item1 item"><div class="fake"></div><p>item9</p></div>
              <div class="item2 item"><div class="fake"></div><p>item10</p></div>
              <div class="item3 item"><div class="fake"></div><p>item11</p></div>
              <div class="item4 item"><div class="fake"></div><p>item12</p></div>
              <div class="item5 item"><div class="fake"></div><p>item13</p></div>
              <div class="item6 item"><div class="fake"></div><p>item14</p></div>
              <div class="item7 item"><div class="fake"></div><p>item15</p></div>
              <div class="item8 item"><div class="fake"></div><p>item16</p></div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination" id="bars" slot="pagination"></div>
      </div>
      <div id="space"></div>
      <div id="store">
        <div class="top"><i class="fa fa-bars" style="padding-right: 5px"></i>Nearby businesses</div>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </div>
    </div>
</template>

<script>
  import Item from "../../components/Item/Item";
  import HeaderGuider from "../../components/HeaderGuide/HeaderGuider";
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
    export default {
      name: "Msite",
      components:{
        HeaderGuider,
        Item
      },
      mounted() {
        new Swiper('.swiper-container',{
          direction: /*'vertical'*/'horizontal',
          pagination: '.swiper-pagination',
          paginationClickable: true,
          observer:true,
          observeParents:true
        });
      }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
@import "src/common/scss/mixins";
  #Msite{
    width: 100%;
    height: 97%;
    .header-title{
      @include titleStyle(30%);
    }
    .title1{
      width: 10% !important;
    }
    .title2{
      width: 80% !important;
    }
    .swiper-container {
      width: 100%;
      height: 30%;
      #serve{
        width: 100%;
        height: 90%;
        div{
          .items{
            display: grid;
            grid-template-columns: repeat(4,1fr);
            grid-template-rows: repeat(2,1fr);
            justify-items: center;
            align-items: center;
            width: 100%;
            height: 100%;
            .item{
              width: 100%;
              height: 100%;
              @include FlexBox(column,center,center);
              .fake{
                width: 50px;
                height: 50px;
                background-color: yellow;
                border-radius: 50%;
                margin: auto;
              }
            }
          }
        }
      }
      #bars{
        width: 100%;
        height: 15px;
        .swiper-pagination-bullet-active{
          background-color: #00926D;
        }
      }
    }
    #space{
      width: 100%;
      height: 10px;
      background-color: #F6F6F6;
    }
    #store{
      width: 100%;
      height: 58%;
      .top{
        color: #989898;
        text-align: left;
        margin-left: 1em;
        margin-top: 1em;
      }
    }
  }
</style>
