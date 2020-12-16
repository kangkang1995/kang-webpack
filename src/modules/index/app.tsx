import * as React from 'react';
import player_02 from "../../assets/images/player_02.png";
import banner06 from "../../assets/images/banner06.jpg";
import gif11111 from "../../assets/images/11111.gif";
import testJosn from "../../assets/others/test.json";
import doc from "../../assets/others/doc11.doc";
import xlsx from "../../assets/others/xlsx222.xlsx";
import horseMp3 from "../../assets/video/horse.mp3";
import movieMp4 from "../../assets/video/movie.mp4";
import movieOgg from "../../assets/video/movie.ogg";

import "./style1";
export default class App extends React.Component {
  state = {};
  render() {
    return (
      <div id="app">
        <div>我是react class3333333</div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <circle
            cx="100"
            cy="50"
            r="40"
            stroke="black"
            strokeWidth="2"
            fill="red"
          />
        </svg>
        <div>
          改变字体fgfdg <br />
          东方军事打击发生的纠纷速度加快分解开始加快进度附件是打开即可即可11212
        </div>
        <div className="flex">
          <div>11</div>
          <div>22</div>
          <div>33</div>
        </div>

        <div>
          <img src={player_02} alt=""/>
        </div>
        <div>
          <img src={banner06}  alt=""/>
        </div>
        <div>
          <img src={gif11111}  alt=""/>
        </div>
        <div className="bg01">

        </div>

        <div>
      <audio controls>
          <source  src={horseMp3} type="audio/mpeg"/>
        您的浏览器不支持 audio 元素。
        </audio>
      </div>

      <div>
        <video width="320" height="240" controls>
        <source src={movieMp4}  type="video/mp4"/>
        您的浏览器不支持 HTML5 video 标签。
      </video>
      </div>

      <div>
        <video width="320" height="240" controls>
        <source src={movieOgg}  type="video/mp4"/>
        您的浏览器不支持 HTML5 video 标签。
      </video>
      </div>


      </div>
    );
  }
}
