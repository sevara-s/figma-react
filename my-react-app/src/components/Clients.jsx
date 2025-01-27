import React from "react";
import "./clients.css";
import stars from "../assets/imgs/stars.png";
import quote from "../assets/svgs/quote.svg";
import house from "../assets/imgs/home.png"

function Clients() {
  return (
    <>
      {/* section:clients started */}
      <div className="clients">
        <div className="container">
          <h1 className="clients_header">Отзывы наших клиентов</h1>
          <div className="comments">
            {/* comment1 */}
            <div className="comment1">
              <div className="comment_top">
                {/* comment_left  started */}
                <div className="comment_left">
                  <h5>Алексей С.А.</h5>
                  <p>28 июня 2021</p>
                </div>
                {/* comment_right started */}
                <div className="comment_right">
                  <img src={stars} alt="" />
                  <p>Общая оценка: (4,8) </p>
                </div>
              </div>

              <p>
                «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                для своего участка. Также мне хотелось бы отметить вежливость
                работников компании, все подробно рассказали. Я считаю этот
                магазин отличным. И наверняка буду покупать снова или советовать
                коллегам.»
              </p>

              <a href="#">Читать полностью</a>
            </div>
            {/* comment2 */}
            <div className="comment1">
              <div className="comment_top">
                {/* comment_left  started */}
                <div className="comment_left">
                  <h5>Алексей С.А.</h5>
                  <p>28 июня 2021</p>
                </div>
                {/* comment_right started */}
                <div className="comment_right">
                  <img src={stars} alt="" />
                  <p>Общая оценка: (4,8) </p>
                </div>
              </div>

              <p>
                «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                для своего участка. Также мне хотелось бы отметить вежливость
                работников компании, все подробно рассказали. Я считаю этот
                магазин отличным. И наверняка буду покупать снова или советовать
                коллегам.»
              </p>

              <a href="#">Читать полностью</a>
            </div>
            {/* comment3 */}
            <div className="comment1">
              <div className="comment_top">
                {/* comment_left  started */}
                <div className="comment_left">
                  <h5>Алексей С.А.</h5>
                  <p>28 июня 2021</p>
                </div>
                {/* comment_right started */}
                <div className="comment_right">
                  <img src={stars} alt="" />
                  <p>Общая оценка: (4,8) </p>
                </div>
              </div>

              <p>
                «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                для своего участка. Также мне хотелось бы отметить вежливость
                работников компании, все подробно рассказали. Я считаю этот
                магазин отличным. И наверняка буду покупать снова или советовать
                коллегам.»
              </p>

              <a href="#">Читать полностью</a>
            </div>
          </div>
          <div className="lastBtn">
            <button className="btnOpen">Открыть все отзывы</button>
          </div>
        </div>
      </div>
      {/* section:clients ended */}

      {/* section:house started */}
      <section className="house">
        <div className="container">
          {/* house left started */}
          <div className="house_left">
            <h1>Немного о нас</h1>
            <div className="border1"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus
              integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing
              nec senectus duis nibh. In faucibus adipiscing tellus enim,
              consequat integer accumsan. Ultrices ipsum nulla consequat
              malesuada enim mollis est.{" "}
            </p>
            <div className="quote">
              <img src={quote} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                lacus integer nunc, ornare ipsum lorem nulla est. Augue eros
                adipiscing nec senectus duis nibh. In faucibus adipiscing tellus
                enim, consequat integer accumsan. Ultrices ipsum nulla consequat
                malesuada enim mollis est. Venenatis, sagittis, amet ornare
                donec purus suscipit nam sodales. Varius sit amet nullam
                dictumst massa consequat odio faucibus.{" "}
              </p>
            </div>
          </div>
          <img src={house} alt="" />
        </div>
      </section>
      {/* section:house ended */}
    </>
  );
}
export default Clients;
