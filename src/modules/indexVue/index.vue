<template>
  <div id="app">
    我是vue
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
      </svg> 
    </div>
    <button @click="test1">节流</button>
    <div>
      改变字体fgfdg <br/>
      东方军事打击发生的纠纷速度加快分解开始加快进度附件是打开即可即可
    </div>
    <div class="flex">
      <div>
        11
      </div>
      <div>
        22
      </div>
      <div>
        33
      </div>
    </div>

    <div>
      <img src="../../assets/images/player_02.png" alt="">
    </div>

    <!-- <div>
      <img :src="player_02" alt="">
    </div> -->
    <div>
      <img :src="banner06" alt="">
    </div>
    <div>
      <img :src="gif11111" alt="">
    </div>
    <div class="bg01">

    </div>
    <div>
      <audio controls>
        <source :src="horseMp3" type="audio/mpeg">
      您的浏览器不支持 audio 元素。
      </audio>
    </div>

    <div>
      <video width="320" height="240" controls>
      <source :src="movieMp4" type="video/mp4">
      您的浏览器不支持 HTML5 video 标签。
    </video>
    </div>

    <div>
      <video width="320" height="240" controls>
      <source :src="movieOgg" type="video/mp4">
      您的浏览器不支持 HTML5 video 标签。
    </video>
    </div>

  </div>
</template>

<script>
import player_02 from "../../assets/images/player_02.png";
import banner06 from "../../assets/images/banner06.jpg";
import gif11111 from "../../assets/images/11111.gif";
import testJosn from "../../assets/others/test.json";
import doc from "../../assets/others/doc11.doc";
import xlsx from "../../assets/others/xlsx222.xlsx";
import horseMp3 from "../../assets/video/horse.mp3";
import movieMp4 from "../../assets/video/movie.mp4";
import movieOgg from "../../assets/video/movie.ogg";
// import less1 from './less1.less';
const _throttle = function(funct,time=2500){
  let status;
  return function(){
    if(!status){
      status = setTimeout(function(){
        status = null;
        funct.apply(this,arguments)
      },time)
    }
  }
}
// 抖动
const _debounce = function(funct,time=2500){
  let status;
  return function(){
    
    clearTimeout(status);

    status = setTimeout(function(){
      status = null;
      funct.apply(this,arguments)
    },time)
  }
}

export default {
  name: 'app',
  data:function(){
    return {
      player_02,
      banner06,
      gif11111,
      horseMp3,
      movieMp4,
      movieOgg
    }
  },
  mounted(){
    console.log(testJosn,1111)
  },
  methods:{
    test1:_debounce(
      function(a=1,b=2){
        console.log('11111')
      }
    ),
    
  }
}
</script>

<style scoped lang="scss">
  @import "./style1.scss";
  // @import "./index.css";
</style>
