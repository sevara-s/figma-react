import React from "react";
import "./footer.css";
import colors from "../assets/svgs/colors.svg";

function Footer() {
  return (
    <>
      {/* contact */}
      <div className="contact">
        <div className="container">
          <h1 className="footer_header">
            Хотите быть в курсе выгодных предложений, акций и новинок?
          </h1>
          <input className="textin" type="text" placeholder="Имя" />
          <input className="textin" type="text" placeholder="Email" />
          <button className="footerbtn">Подписаться</button>
        </div>
      </div>

      {/* footer started */}
      <footer className="footer">
        <div className="container">
          <div className="footer_top">
            {/* f1 */}
            <div className="f1">
              <div className="colors_footer">
                <img src={colors} alt="" />
                <p>Логотип вашего магазина</p>
              </div>
              <div className="footer_links1">
                <h5>Для покупателейing</h5>
                <p>
                  <a href="#">Доставка</a>
                </p>
                <p>
                  <a href="#">Гарантия</a>
                </p>
                <p>
                  <a href="#">Политика конфиденциальности</a>
                </p>
                <p>
                  <a href="#">Отзывы</a>
                </p>
                <p>
                  <a href="#">Наши работы</a>
                </p>
              </div>
            </div>
            {/* f2 */}
            <div className="f1">
              <div className="colors_footer"></div>
              <div className="footer_links1">
                <h5>Для покупателейing</h5>
                <p>
                  <a href="#">Доставка</a>
                </p>
                <p>
                  <a href="#">Гарантия</a>
                </p>
                <p>
                  <a href="#">Политика конфиденциальности</a>
                </p>
                <p>
                  <a href="#">Отзывы</a>
                </p>
                <p>
                  <a href="#">Наши работы</a>
                </p>
              </div>
            </div>
            {/* f3 */}
            <div className="f1">
              <div className="colors_footer"></div>
              <div className="footer_links1">
                <h5>Для покупателейing</h5>
                <p>
                  <a href="#">Доставка</a>
                </p>
                <p>
                  <a href="#">Гарантия</a>
                </p>
                <p>
                  <a href="#">Политика конфиденциальности</a>
                </p>
                <p>
                  <a href="#">Отзывы</a>
                </p>
                <p>
                  <a href="#">Наши работы</a>
                </p>
              </div>
            </div>
            {/* f4 */}
            <div className="f1">
              <div className="colors_footer"></div>
              <div className="footer_links1">
                <h5>Для покупателейing</h5>
                <p>
                  <a href="#">Доставка</a>
                </p>
                <p>
                  <a href="#">Гарантия</a>
                </p>
                <p>
                  <a href="#">Политика конфиденциальности</a>
                </p>
                <p>
                  <a href="#">Отзывы</a>
                </p>
                <p>
                  <a href="#">Наши работы</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer ended */}
    </>
  );
}
export default Footer;
