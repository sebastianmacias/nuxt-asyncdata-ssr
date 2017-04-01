<template>
  <footer>


    <v-container>
      <v-row>
        <v-col class="text-xs-left" xs12="xs12" md6="md6">
          <img src="../assets/img/logo.png" alt="Vapecity Logo" class="logo" />
            <h5><span>La tienda de mods y cigarrillos electronicos</span> <span>#1 en Colombia.</span></h5>
        </v-col>
        <v-col class="text-xs-left" xs12="xs12" md6="md6" style="background:transparent">
          <div class="right-col">
            <h6 class="hidden-sm-and-down">Contáctanos en:</h6>
            <ul>
              <li class="light-blue--text text--lighten-1"><v-icon>mail_outline</v-icon><span>vapecitycolombia@gmail.com</span></li>
              <li class="light-blue--text text--lighten-1"><v-icon>chat_bubble</v-icon><span>Whatsapp: 3186449873</span></li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-container>



  </footer>
</template>

<style lang="scss"scoped>

@import '~assets/css/colors.scss';
@import '../node_modules/sass-mq/_mq.scss';

$mq-responsive: true;

$mq-breakpoints: (
    xs: 0px,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
);


// xs: 0
// sm: 576px
// md: 768px
// lg: 992px
// xl: 1200px


// If you want to display the currently active breakpoint in the top
// right corner of your site during development, add the breakpoints
// to this list, ordered by width, e.g. (mobile, tablet, desktop).
$mq-show-breakpoints: (xs, sm, md, lg, xl);


footer{
  background-color:#070718; 

  h5{
    color:#fff;
    padding-left: 13px;

    @include mq($from: sm) {
      span{

        font-size: 20px;

      }
    }       
    span{
      display: block;
    }
  }

  h6{
    color:#fff;
    font-weight: 400;
    margin-top: 70px;

    @include mq($from: md) {
      font-size: 22px;
    }    
  }

  div.right-col{

        @include mq($from: md) {
          padding-left: 40px;
        }    
  }

  ul{
    list-style-type: none;
    li{
      font-weight: 400;
      font-size: 30px;
      margin-top: 0px;
      span{
        padding-left: 10px;
        font-size: 18px;
        display: inline-block;
        vertical-align: top;
        padding-top: 13px;
        font-size: 12px;

        @include mq($from: md) {
          font-size: 15px;
        }

        @include mq($from: lg) {
          font-size: 17px;
        }

      }

      i.icon{
        font-size: 20px;
      }
    }
  }
}
</style>
