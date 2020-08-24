<template>
  <div id="Profile">
    <HeaderGuider>
      <div slot="Back" class="header-title"></div>
      <div slot="Content" class="header-title">Myself</div>
      <div slot="LoginSign" class="header-title"></div>
    </HeaderGuider>
    <div id="user">
      <div><div class="FakeImg"></div></div>
      <div>
        <div class="choose">
          <h2>Login/Sign</h2>
          <h2>Bind mobile phone number</h2>
        </div>
      </div>
      <div><div class="go"></div></div>
    </div>
    <ul id="money">
      <li class="item"><div class="-money" style="color: #F39C22">¥0.0</div><div class="desc">Balance</div></li>
      <li class="item"><div class="-money" style="color: #F7734C">0</div><div class="desc">Token</div></li>
      <li class="item"><div class="-money" style="color: #66B109">0</div><div class="desc">Point</div></li>
    </ul>
    <ul id="servers">
      <li class="server"><i class="fa fa-cutlery" style="color: rgb(121,186,171);"></i><span>My Order</span></li>
      <li class="server"><i class="fa fa-shopping-bag" style="color: #FD6D3D"></i><span>Points Mall</span></li>
      <li class="server"><i class="fa fa-id-card" style="color: #F5AD40"></i><span>membership card</span></li>
      <li class="server"><i class="fa fa-server" style="color: #018E6D"></i><span>Serve Center</span></li>
    </ul>
  </div>
</template>

<script>
    import HeaderGuider from "../../components/HeaderGuide/HeaderGuider";
    export default {
      name: "Profile",
      components:{
        HeaderGuider
      }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "src/common/scss/mixins";
  #Profile{
    .header-title{
      @include titleStyle(30%);
    }
    #user{
      width: 100%;
      height: 150px;
      background-color: #009474;
      @include FlexBox(row,center,center);
      div{
        height: 100%;
        &:nth-child(1){
          width: 30%;
          .FakeImg{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: yellow;
            margin: 25px auto;
          }
        }
        &:nth-child(2){
          width: 60%;
          .choose{
            width: 100%;
            height: 50%;
            padding: 15% 0;
            h2{
              padding: 10px 0;
              font-size: 1.3em;
              color: white;
              text-align: left;
            }
          }
        }
        &:nth-child(3){
          width: 10%;
          color: white;
          line-height: 150px;
          .go{
            margin: auto;
          }
        }
      }
    }
    #money{
      height: 80px;
      width: 100%;
      @include FlexBox(row,space-around,center);
      border-bottom: 1px solid #dddddd;
      .item{
        height: 100%;
        width: 30%;
        @include FlexBox(column,space-around,center);
        border-right: 1px solid #dddddd;
        &:last-child{
          border-right:none;
        }
        .-money{
          font-size: 2em;
          font-weight: 800;
        }
        .desc{
          font-weight: 500;
        }
      }
    }
    #servers{
      height: 180px;
      width: 100%;
      @include FlexBox(column,space-around,space-around);
      .server{
        height: 45px;
        width: 100%;
        @include FlexBox(row,start,center);
        border-bottom: 1px solid #dddddd;
        i{
          line-height: 45px;
          margin: 0 15px;
        }
        span{
          line-height: 45px;
        }
      }
    }
  }
</style>
