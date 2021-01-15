import React from "react";
import { Route, Link } from 'react-router-dom';
import checipe_logo from './chaecipielogo.png';
import image2 from './image2.jfif';
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

  

const Mainpage = () =>{

    var settings_bttom = {
      // 좌우 화살표 줄 것인가
      arrows: false,
      // 마지막 슬라이드에서 처음 슬라이스로
      infinite: true,
      speed: 2000,
      // 한 번에 스크롤 몇 개 보여줄 건가
      slidesToShow: 4,
      // 스크롤 할 때마다 몇 장씩 넘길 것인가
      slidesToScroll: 1,
      // 자동 넘김을 할 것인가. 한다면 스피드는?
      autoplay: true,
      autoplaySpeed: 3000,
      // 화면에 올리면 슬라이더가 자동으로 넘어가지 않음
      pauseOnHover: true,
      // 레이지 로딩할 거야?
      lazyLoad: true
      };

      var settings_mid = {
          // 점의 유무설정
        dots: true,
        // 좌우 화살표 줄 것인가
        arrows: false,
        // 마지막 슬라이드에서 처음 슬라이스로
        infinite: true,
        speed: 2000,
        // 한 번에 스크롤 몇 개 보여줄 건가
        slidesToShow: 1,
        // 스크롤 할 때마다 몇 장씩 넘길 것인가
        slidesToScroll: 1,
        // 자동 넘김을 할 것인가. 한다면 스피드는?
        autoplay: true,
        autoplaySpeed: 2000,
        // 화면에 올리면 슬라이더가 자동으로 넘어가지 않음
        pauseOnHover: false,
        // 레이지 로딩할 거야?
        lazyLoad: true
        };

    return(
            <div className="wrap">
                  <div className="half_bg">   
                      <div className="header">
                          <div className="logo">
                              <img
                                src={ checipe_logo }
                                width='100px'
                                height='100px'
                                alt= 'logo image'/>
                          </div>
                              <div>
                                  <ul className="nav">
                                      <li><Link to="#" />About</li>
                                       <li><Link to="#" />Recipe</li>
                                       <li><Link to="#" />Notice</li>
                                       <li><Link to="#" />Open</li>
                                  </ul>
                              </div>
                              
                              <div className="login">
                                 <li><Link to="#" />로그인</li>
                              </div>
                   </div>
              </div>  
                  
                  <div className="midle">
                  <div className="slideshow-container">
                  <Slider {...settings_mid}>
                            <img
                                src={ image2 }
                                width='700px'
                                height='370px'
                                />
                                 <img
                                src={ image2 }
                                width='700px'
                                height='370px'
                                />
                                 <img
                                src={ image2 }
                                width='700px'
                                height='370px'
                                />
                  </Slider>
                  </div>
  
                              <div className="about_vegan">
                                 <li><Link to="#" />About</li>
                                  <li><Link to="#" />VEGETARIAN</li>
                                  <li><Link to="#" />채식에관하여</li>
                              </div>

                          <div className="btn">
                              <li><Link to="#" />레시피찾기</li>
                      </div>
      
                  </div>

                  <div className="lat">
                       <section className="visual">
                       <Slider {...settings_bttom}>
                          <div id="link-image">
                             <img
                                src={ image2 }
                                width='200px'
                                alt='호박고구마'
                                border='3'
                                />
                              </div>
                          <div id="link-image">
                          <img
                                src={ image2 }
                                width='200px'
                                alt='호박고구마'
                                border='3'
                                />
                          </div>
                           <div id="link-image">
                           <img
                                src={ image2 }
                                width='200px'
                                alt='호박고구마'
                                border='3'
                                />
                          </div>
                           <div id="link-image">
                           <img
                                src={ image2 }
                                width='200px'
                                alt='호박고구마'
                                border='3'
                                />
                          </div>
                           <div id="link-image">
                           <img
                                src={ image2 }
                                width='200px'
                                alt='호박고구마'
                                border='3'
                                />
                          </div>
                          </Slider>
                      </section>
                   
                  </div>
           </div>
    );
    
}          

   export default Mainpage;