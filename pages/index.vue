<template>
  <section>
    <v-container>
      <v-row>
        <v-col xs12="xs12"
               class="slogan">
          <h4 class="text-xs-center slogan">Descubre</h4>
          <h5 class="text-xs-center slogan">Porque <span>somos</span> mas que <br> una tienda</h5>
        </v-col>
        <v-col xs12="xs12">
          <h6>E-liquids</h6>
          <div class="section-description"
               v-html="pageData.eliquids_text"> </div>
        </v-col>
      </v-row>
    </v-container>
  
  </section>
</template>

<script>
import axios from 'axios'
export default {

  fetch() {
    // The fetch method is used to fill the store before rendering the page
  },

  asyncData({ params }) {
    return axios.get('https://api.cosmicjs.com/v1/vapecity/object/home?pretty=true&hide_metafields=true&read_key=BIoj4pKfa391IppJHVK70oHrtBTAok2oLYEYUH767HF7UvLEuu')
      .then((res) => {
        return { pageData: res.data.object.metadata }
      })
  }
  // and more functionality to discover
  // ...
}
</script>

<style lang="scss"scoped>
@import '~assets/css/colors.scss';
@import '../node_modules/sass-mq/_mq.scss';


$mq-responsive: true;

$mq-breakpoints: ( xs: 0px,
sm: 576px,
md: 768px,
lg: 992px,
xl: 1200px);


// xs: 0
// sm: 576px
// md: 768px
// lg: 992px
// xl: 1200px
// If you want to display the currently active breakpoint in the top
// right corner of your site during development, add the breakpoints
// to this list, ordered by width, e.g. (mobile, tablet, desktop).
$mq-show-breakpoints: (xs, sm, md, lg, xl);


div.col.slogan {
  padding-top: 60px;
}

h4 {
  &.slogan {
    color: $color-main;
    font-weight: bold;
    font-size: 36px;
  }
}

h5 {
  &.slogan {
    color: rgba(0, 0, 0, 0.7);
    span {
      color: rgba(0, 0, 0, 0.8);
      font-weight: 600;
    }
  }

  @include mq($from: xs) {
    line-height: 23px;
  }

  @include mq($from: sm) {
    line-height: 23px;
  }

  @include mq($from: lg) {
    line-height: 32px;
  }
  @include mq($from: xl) {
    line-height: 32px;
  }
}

h6 {

  @include mq($from: xs) {
    font-size: 14px;
  }

  @include mq($from: sm) {
    font-size: 18px;
  }

  @include mq($from: lg) {
    font-size: 20px;
  }
}

p {

  @include mq($from: xs) {
    font-size: 14px;
  }

  @include mq($from: sm) {
    font-size: 16px;
  }
}

.item {

  float: left;
  padding: 20px; // Apply styling to mobile and upwards
  @include mq($from: xs) {
    width: 100%; // border: 3px solid red;
  }

  @include mq($from: sm) {
    width: 50%; // border: 3px solid blue;
  }

  @include mq($from: lg) {
    width: 33.33%; // border: 3px solid deeppink;
  }

  @include mq($from: xl) {
    width: 25%; // border: 3px solid orangered;
  }
}

.title {
  margin: 50px 0;
}

.container {
  max-width: 1200px;
}



div.container.big-msg {
  background: $color-third;
  h5 {
    color: white;
    padding-top: 25px;
    padding-bottom: 10px;
    span {
      display: block;
    }
  }
}

div.subscribe {
  // line-height: 
  margin-top: 50px;
  margin-bottom: 100px;
  h5 {
    margin-bottom: 30px;
    span {
      display: block;
      font-weight: 300;
      span.accent-01 {
        font-weight: 400;
        display: inline;
      }
      span.accent-02 {
        font-weight: 700;
        display: inline;
        color: $color-third;
      }
      span.brand {
        font-weight: 700;
        display: inline;
      }
    }
  }
  .input-group__input {
    // background-color:$color-third !important;
  }
}

.container--fluid {
  max-width: initial;
}

div.product-photo {
  align-items: flex-start;
  justify-content: flex-end;
  span.chip {
    border-radius: 2px;
    background-color: rgba(244, 67, 54, 0.7);
  }
}
</style>
