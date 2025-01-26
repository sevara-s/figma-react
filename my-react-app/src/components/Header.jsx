import React from "react";
import "./Header.css";
import location from "../assets/svgs/location.svg";
import colors from "../assets/svgs/colors.svg";
import check from "../assets/svgs/check.svg";
import searchBtn from "../assets/svgs/searchBtn.svg";

function Header() {
  return (
    <>
      {/* Header top started */}
      <header className="header">
        <div className="container">
          {/* header left started */}
          <div className="header_left">
            {/* loc1 */}
            <div className="loc1">
              <img src={location} alt="" />
              <p>
                <a href="#">Ваш город: Константинополь</a>
              </p>
            </div>
            {/* loc2 */}
            <div className="loc1">
              <img src={location} alt="" />
              <p>
                <a href="#">Ваш город: Константинополь</a>
              </p>
            </div>
          </div>
          {/* header left ended */}

          {/* header right started */}
          <div className="header_right">
            <ul>
              <li>
                <a href="#">Cтатьи</a>
              </li>
              <li>
                <a href="#">Оплата</a>
              </li>
              <li>
                <a href="#">Гарантия;</a>
              </li>
              <li>
                <a href="#">Дилерам;</a>
              </li>
              <li>
                <a href="#">Вакансии;</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* Header top ended */}

      {/* Header bottom started */}
      <div className="header_bottom">
        <div className="container">
          {/* colors */}
          <div className="colors">
            <img src={colors} alt="" />
            <p>Логотип вашего магазина</p>
          </div>
          {/* colors */}

          {/* search */}
          <div className="search">
            {/* top checks */}
            <div className="top_search">
              <div className="tick">
                <img src={check} alt="" />
                <p>Лучшие цены</p>
              </div>
              <div className="tick">
                <img src={check} alt="" />
                <p>Бесплатная доставка</p>
              </div>
              <div className="tick">
                <img src={check} alt="" />
                <p>Гарантия от 3х лет</p>
              </div>
              <div className="tick">
                <img src={check} alt="" />
                <p>Более 1 000 товаров</p>
              </div>
            </div>
            {/* top checks */}

            {/* searching */}
            <div className="searching">
              <input
                className="inputSearch"
                type="search"
                placeholder="Поиск по каталогу..."
              />
              <div className="btn">
                <img src={searchBtn} alt="" />
                <div className="text">
                  <p>Найти</p>
                </div>
              </div>
            </div>
            {/* searching */}
          </div>

          {/* phone numbers */}
          <div className="phone_numbers">
            <p>Ежедневно с 9:00 до 21:00</p>
            <h2>8 (800) 800-00-00</h2>
            <h2>8 (495) 700-00-00</h2>
          </div>
          {/* phone numbers */}

          {/* email */}
          <div className="email">
            <p>
              <a href="#">youremail@mailbox.ru</a>
            </p>
            <button className="btn1">Заказать звонок</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
