import React from "react";
import "./Showcase.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./showcase.css";
import { Navigation } from "swiper/modules";
import category from "../assets/svgs/categories.svg";
import img from "../assets/imgs/main.png";
import icon1 from "../assets/imgs/icon1.png";
import icon2 from "../assets/imgs/icon2.png";
import icon3 from "../assets/imgs/icon3.png";
import icon4 from "../assets/imgs/icon4.png";
import icon5 from "../assets/imgs/icon5.png";


function Showcase() {
  return (
    <>
      {/* categories started */}
      <div className="categories">
        <div className="container">
          {/* category1 */}
          <div className="category1">
            <img src={category} alt="" />
            <h1>Каталог товаров</h1>
          </div>
          {/* category2 */}
          <div className="category2">
            <h1>О компании</h1>
          </div>
          {/* category3 */}
          <div className="category2">
            <h1>Отзывы</h1>
          </div>
          {/* category4 */}
          <div className="category2">
            <h1>Наши работы</h1>
          </div>
          {/* category5 */}
          <div className="category2">
            <h1>Доставка</h1>
          </div>
          {/* category6 */}
          <div className="category2">
            <h1>Контакты</h1>
          </div>
        </div>
      </div>
      {/* categories ended */}

      {/* swiper started */}
      <div className="showcase-container">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide className="slide1">
            <img src={img} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide1">
            <img src={img} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide1">
            <img src={img} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* swiper ended */}

      {/* swiper bottom */}
      <div className="swiper_bottom">
        {/* card1 */}
        <div className="card1">
          <img src={icon1} alt="" />
          <p>Изготовливаем конструкции по вашему дизайн-проекту</p>
        </div>
        {/* card2 */}
        <div className="card1">
          <img src={icon2} alt="" />
          <p>Изготовили более 2 400 деревянных конструкций</p>
        </div>
        {/* card3 */}
        <div className="card1">
          <img src={icon3} alt="" />
          <p>Собственное производство площадью 6 000 м2</p>
        </div>
        {/* card4 */}
        <div className="card1">
          <img src={icon4} alt="" />
          <p>Производим изделия из дерева с 1998 года</p>
        </div>
        {/* card5 */}
        <div className="card1">
          <img src={icon5} alt="" />
          <p>Производим изделия из дерева с 1998 года</p>
        </div>
      </div>
    </>
  );
}
export default Showcase;
