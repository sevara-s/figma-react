import React from "react";
import "./products.css";
import card from "../assets/imgs/card.png";
import c1 from "../assets/svgs/c1.svg";
import c2 from "../assets/svgs/c2.svg";
import c3 from "../assets/svgs/c3.svg";

function Products() {
  return (
    <>
      {/* section:hit_products started */}
      <div className="hit_products">
        <div className="container">
          <h1 className="product_header">Хиты продаж</h1>
          {/* products_name startede */}
          <div className="products_name">
            <a href="#">Беседки</a>

            <a href="#">Бани</a>

            <a href="#">Площадки</a>

            <a href="#">Дома</a>

            <a href="#">Перголы</a>

            <a href="#">Бренды</a>
          </div>
          {/* products_name ended */}

          {/*product_cards  */}
          <div className="product_cards">
            {/* card1 */}
            <div className="card2">
              <img width="100%" src={card} alt="" />
              {/* product info  */}
              <div className="products_info">
                <div className="article">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
              </div>
              <h1 className="info_header">
                Название товара длинное в две строки наверное
              </h1>
              {/* product info */}
              <div className="all_info">
                {/* info1 */}
                <div className="info1">
                  <img src={c1} alt="" />
                  <p>
                    Размеры: .............................. 12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Площадь:
                    ......................................................33 м2
                  </p>
                </div>
                {/* info3 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Вместимость: ..........................................15
                    чел.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c3} alt="" />
                  <p>
                    Гарантия:
                    ....................................................10 лет
                  </p>
                </div>
              </div>

              {/* price */}
              <div className="price">
                {/* left */}
                <div className="price_left">
                  <div className="discount">
                    <p>6 127 500 ₽</p>
                    <div className="percent">
                      <p>-25%</p>
                    </div>
                  </div>
                  <h1 className="price1">5 023 900 ₽</h1>
                </div>
                {/* right */}
                <div className="right">
                  <button className="buyBtn">Купить</button>
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className="card2">
              <img width="100%" src={card} alt="" />
              {/* product info  */}
              <div className="products_info">
                <div className="article">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
              </div>
              <h1 className="info_header">
                Название товара длинное в две строки наверное
              </h1>
              {/* product info */}
              <div className="all_info">
                {/* info1 */}
                <div className="info1">
                  <img src={c1} alt="" />
                  <p>
                    Размеры: .............................. 12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Площадь:
                    ......................................................33 м2
                  </p>
                </div>
                {/* info3 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Вместимость: ..........................................15
                    чел.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c3} alt="" />
                  <p>
                    Гарантия:
                    ....................................................10 лет
                  </p>
                </div>
              </div>

              {/* price */}
              <div className="price">
                {/* left */}
                <div className="price_left">
                  <div className="discount">
                    <p>6 127 500 ₽</p>
                    <div className="percent">
                      <p>-25%</p>
                    </div>
                  </div>
                  <h1 className="price1">5 023 900 ₽</h1>
                </div>
                {/* right */}
                <div className="right">
                  <button className="buyBtn">Купить</button>
                </div>
              </div>
            </div>
            {/* card3 */}
            <div className="card2">
              <img width="100%" src={card} alt="" />
              {/* product info  */}
              <div className="products_info">
                <div className="article">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
              </div>
              <h1 className="info_header">
                Название товара длинное в две строки наверное
              </h1>
              {/* product info */}
              <div className="all_info">
                {/* info1 */}
                <div className="info1">
                  <img src={c1} alt="" />
                  <p>
                    Размеры: .............................. 12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Площадь:
                    ......................................................33 м2
                  </p>
                </div>
                {/* info3 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Вместимость: ..........................................15
                    чел.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c3} alt="" />
                  <p>
                    Гарантия:
                    ....................................................10 лет
                  </p>
                </div>
              </div>

              {/* price */}
              <div className="price">
                {/* left */}
                <div className="price_left">
                  <div className="discount">
                    <p>6 127 500 ₽</p>
                    <div className="percent">
                      <p>-25%</p>
                    </div>
                  </div>
                  <h1 className="price1">5 023 900 ₽</h1>
                </div>
                {/* right */}
                <div className="right">
                  <button className="buyBtn">Купить</button>
                </div>
              </div>
            </div>
            {/* card4 */}
            <div className="card2">
              <img width="100%" src={card} alt="" />
              {/* product info  */}
              <div className="products_info">
                <div className="article">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
              </div>
              <h1 className="info_header">
                Название товара длинное в две строки наверное
              </h1>
              {/* product info */}
              <div className="all_info">
                {/* info1 */}
                <div className="info1">
                  <img src={c1} alt="" />
                  <p>
                    Размеры: .............................. 12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Площадь:
                    ......................................................33 м2
                  </p>
                </div>
                {/* info3 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Вместимость: ..........................................15
                    чел.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c3} alt="" />
                  <p>
                    Гарантия:
                    ....................................................10 лет
                  </p>
                </div>
              </div>

              {/* price */}
              <div className="price">
                {/* left */}
                <div className="price_left">
                  <div className="discount">
                    <p>6 127 500 ₽</p>
                    <div className="percent">
                      <p>-25%</p>
                    </div>
                  </div>
                  <h1 className="price1">5 023 900 ₽</h1>
                </div>
                {/* right */}
                <div className="right">
                  <button className="buyBtn">Купить</button>
                </div>
              </div>
            </div>
            {/* card5 */}
            <div className="card2">
              <img width="100%" src={card} alt="" />
              {/* product info  */}
              <div className="products_info">
                <div className="article">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
              </div>
              <h1 className="info_header">
                Название товара длинное в две строки наверное
              </h1>
              {/* product info */}
              <div className="all_info">
                {/* info1 */}
                <div className="info1">
                  <img src={c1} alt="" />
                  <p>
                    Размеры: .............................. 12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Площадь:
                    ......................................................33 м2
                  </p>
                </div>
                {/* info3 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Вместимость: ..........................................15
                    чел.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c3} alt="" />
                  <p>
                    Гарантия:
                    ....................................................10 лет
                  </p>
                </div>
              </div>

              {/* price */}
              <div className="price">
                {/* left */}
                <div className="price_left">
                  <div className="discount">
                    <p>6 127 500 ₽</p>
                    <div className="percent">
                      <p>-25%</p>
                    </div>
                  </div>
                  <h1 className="price1">5 023 900 ₽</h1>
                </div>
                {/* right */}
                <div className="right">
                  <button className="buyBtn">Купить</button>
                </div>
              </div>
            </div>
            {/* card6 */}
            <div className="card2">
              <img width="100%" src={card} alt="" />
              {/* product info  */}
              <div className="products_info">
                <div className="article">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
              </div>
              <h1 className="info_header">
                Название товара длинное в две строки наверное
              </h1>
              {/* product info */}
              <div className="all_info">
                {/* info1 */}
                <div className="info1">
                  <img src={c1} alt="" />
                  <p>
                    Размеры: .............................. 12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Площадь:
                    ......................................................33 м2
                  </p>
                </div>
                {/* info3 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Вместимость: ..........................................15
                    чел.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c3} alt="" />
                  <p>
                    Гарантия:
                    ....................................................10 лет
                  </p>
                </div>
              </div>

              {/* price */}
              <div className="price">
                {/* left */}
                <div className="price_left">
                  <div className="discount">
                    <p>6 127 500 ₽</p>
                    <div className="percent">
                      <p>-25%</p>
                    </div>
                  </div>
                  <h1 className="price1">5 023 900 ₽</h1>
                </div>
                {/* right */}
                <div className="right">
                  <button className="buyBtn">Купить</button>
                </div>
              </div>
            </div>
            {/* card7*/}
            <div className="card2">
              <img width="100%" src={card} alt="" />
              {/* product info  */}
              <div className="products_info">
                <div className="article">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
              </div>
              <h1 className="info_header">
                Название товара длинное в две строки наверное
              </h1>
              {/* product info */}
              <div className="all_info">
                {/* info1 */}
                <div className="info1">
                  <img src={c1} alt="" />
                  <p>
                    Размеры: .............................. 12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Площадь:
                    ......................................................33 м2
                  </p>
                </div>
                {/* info3 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Вместимость: ..........................................15
                    чел.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c3} alt="" />
                  <p>
                    Гарантия:
                    ....................................................10 лет
                  </p>
                </div>
              </div>

              {/* price */}
              <div className="price">
                {/* left */}
                <div className="price_left">
                  <div className="discount">
                    <p>6 127 500 ₽</p>
                    <div className="percent">
                      <p>-25%</p>
                    </div>
                  </div>
                  <h1 className="price1">5 023 900 ₽</h1>
                </div>
                {/* right */}
                <div className="right">
                  <button className="buyBtn">Купить</button>
                </div>
              </div>
            </div>
            {/* card8 */}
            <div className="card2">
              <img width="100%" src={card} alt="" />
              {/* product info  */}
              <div className="products_info">
                <div className="article">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
              </div>
              <h1 className="info_header">
                Название товара длинное в две строки наверное
              </h1>
              {/* product info */}
              <div className="all_info">
                {/* info1 */}
                <div className="info1">
                  <img src={c1} alt="" />
                  <p>
                    Размеры: .............................. 12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Площадь:
                    ......................................................33 м2
                  </p>
                </div>
                {/* info3 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Вместимость: ..........................................15
                    чел.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c3} alt="" />
                  <p>
                    Гарантия:
                    ....................................................10 лет
                  </p>
                </div>
              </div>

              {/* price */}
              <div className="price">
                {/* left */}
                <div className="price_left">
                  <div className="discount">
                    <p>6 127 500 ₽</p>
                    <div className="percent">
                      <p>-25%</p>
                    </div>
                  </div>
                  <h1 className="price1">5 023 900 ₽</h1>
                </div>
                {/* right */}
                <div className="right">
                  <button className="buyBtn">Купить</button>
                </div>
              </div>
            </div>
            {/* card9*/}
            <div className="card2">
              <img width="100%" src={card} alt="" />
              {/* product info  */}
              <div className="products_info">
                <div className="article">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
              </div>
              <h1 className="info_header">
                Название товара длинное в две строки наверное
              </h1>
              {/* product info */}
              <div className="all_info">
                {/* info1 */}
                <div className="info1">
                  <img src={c1} alt="" />
                  <p>
                    Размеры: .............................. 12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Площадь:
                    ......................................................33 м2
                  </p>
                </div>
                {/* info3 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Вместимость: ..........................................15
                    чел.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c3} alt="" />
                  <p>
                    Гарантия:
                    ....................................................10 лет
                  </p>
                </div>
              </div>

              {/* price */}
              <div className="price">
                {/* left */}
                <div className="price_left">
                  <div className="discount">
                    <p>6 127 500 ₽</p>
                    <div className="percent">
                      <p>-25%</p>
                    </div>
                  </div>
                  <h1 className="price1">5 023 900 ₽</h1>
                </div>
                {/* right */}
                <div className="right">
                  <button className="buyBtn">Купить</button>
                </div>
              </div>
            </div>
            {/* card10 */}
            <div className="card2">
              <img width="100%" src={card} alt="" />
              {/* product info  */}
              <div className="products_info">
                <div className="article">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
              </div>
              <h1 className="info_header">
                Название товара длинное в две строки наверное
              </h1>
              {/* product info */}
              <div className="all_info">
                {/* info1 */}
                <div className="info1">
                  <img src={c1} alt="" />
                  <p>
                    Размеры: .............................. 12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Площадь:
                    ......................................................33 м2
                  </p>
                </div>
                {/* info3 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Вместимость: ..........................................15
                    чел.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c3} alt="" />
                  <p>
                    Гарантия:
                    ....................................................10 лет
                  </p>
                </div>
              </div>

              {/* price */}
              <div className="price">
                {/* left */}
                <div className="price_left">
                  <div className="discount">
                    <p>6 127 500 ₽</p>
                    <div className="percent">
                      <p>-25%</p>
                    </div>
                  </div>
                  <h1 className="price1">5 023 900 ₽</h1>
                </div>
                {/* right */}
                <div className="right">
                  <button className="buyBtn">Купить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section:hit_products ended */}

      {/* section:hit_products started */}
      <div className="hit_products">
        <div className="container">
          <h1 className="product_header">Акционные модели</h1>
          {/* products_name startede */}
          <div className="products_name">
            <a href="#">Беседки</a>

            <a href="#">Бани</a>

            <a href="#">Площадки</a>

            <a href="#">Дома</a>

            <a href="#">Перголы</a>

            <a href="#">Бренды</a>
          </div>
          {/* products_name ended */}

          {/*product_cards  */}
          <div className="product_cards">
            {/* card1 */}
            <div className="card2">
              <img width="100%" src={card} alt="" />
              {/* product info  */}
              <div className="products_info">
                <div className="article">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
              </div>
              <h1 className="info_header">
                Название товара длинное в две строки наверное
              </h1>
              {/* product info */}
              <div className="all_info">
                {/* info1 */}
                <div className="info1">
                  <img src={c1} alt="" />
                  <p>
                    Размеры: .............................. 12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Площадь:
                    ......................................................33 м2
                  </p>
                </div>
                {/* info3 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Вместимость: ..........................................15
                    чел.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c3} alt="" />
                  <p>
                    Гарантия:
                    ....................................................10 лет
                  </p>
                </div>
              </div>

              {/* price */}
              <div className="price">
                {/* left */}
                <div className="price_left">
                  <div className="discount">
                    <p>6 127 500 ₽</p>
                    <div className="percent">
                      <p>-25%</p>
                    </div>
                  </div>
                  <h1 className="price1">5 023 900 ₽</h1>
                </div>
                {/* right */}
                <div className="right">
                  <button className="buyBtn">Купить</button>
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className="card2">
              <img width="100%" src={card} alt="" />
              {/* product info  */}
              <div className="products_info">
                <div className="article">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
              </div>
              <h1 className="info_header">
                Название товара длинное в две строки наверное
              </h1>
              {/* product info */}
              <div className="all_info">
                {/* info1 */}
                <div className="info1">
                  <img src={c1} alt="" />
                  <p>
                    Размеры: .............................. 12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Площадь:
                    ......................................................33 м2
                  </p>
                </div>
                {/* info3 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Вместимость: ..........................................15
                    чел.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c3} alt="" />
                  <p>
                    Гарантия:
                    ....................................................10 лет
                  </p>
                </div>
              </div>

              {/* price */}
              <div className="price">
                {/* left */}
                <div className="price_left">
                  <div className="discount">
                    <p>6 127 500 ₽</p>
                    <div className="percent">
                      <p>-25%</p>
                    </div>
                  </div>
                  <h1 className="price1">5 023 900 ₽</h1>
                </div>
                {/* right */}
                <div className="right">
                  <button className="buyBtn">Купить</button>
                </div>
              </div>
            </div>
            {/* card3 */}
            <div className="card2">
              <img width="100%" src={card} alt="" />
              {/* product info  */}
              <div className="products_info">
                <div className="article">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
              </div>
              <h1 className="info_header">
                Название товара длинное в две строки наверное
              </h1>
              {/* product info */}
              <div className="all_info">
                {/* info1 */}
                <div className="info1">
                  <img src={c1} alt="" />
                  <p>
                    Размеры: .............................. 12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Площадь:
                    ......................................................33 м2
                  </p>
                </div>
                {/* info3 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Вместимость: ..........................................15
                    чел.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c3} alt="" />
                  <p>
                    Гарантия:
                    ....................................................10 лет
                  </p>
                </div>
              </div>

              {/* price */}
              <div className="price">
                {/* left */}
                <div className="price_left">
                  <div className="discount">
                    <p>6 127 500 ₽</p>
                    <div className="percent">
                      <p>-25%</p>
                    </div>
                  </div>
                  <h1 className="price1">5 023 900 ₽</h1>
                </div>
                {/* right */}
                <div className="right">
                  <button className="buyBtn">Купить</button>
                </div>
              </div>
            </div>
            {/* card4 */}
            <div className="card2">
              <img width="100%" src={card} alt="" />
              {/* product info  */}
              <div className="products_info">
                <div className="article">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
              </div>
              <h1 className="info_header">
                Название товара длинное в две строки наверное
              </h1>
              {/* product info */}
              <div className="all_info">
                {/* info1 */}
                <div className="info1">
                  <img src={c1} alt="" />
                  <p>
                    Размеры: .............................. 12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Площадь:
                    ......................................................33 м2
                  </p>
                </div>
                {/* info3 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Вместимость: ..........................................15
                    чел.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c3} alt="" />
                  <p>
                    Гарантия:
                    ....................................................10 лет
                  </p>
                </div>
              </div>

              {/* price */}
              <div className="price">
                {/* left */}
                <div className="price_left">
                  <div className="discount">
                    <p>6 127 500 ₽</p>
                    <div className="percent">
                      <p>-25%</p>
                    </div>
                  </div>
                  <h1 className="price1">5 023 900 ₽</h1>
                </div>
                {/* right */}
                <div className="right">
                  <button className="buyBtn">Купить</button>
                </div>
              </div>
            </div>
            {/* card5 */}
            <div className="card2">
              <img width="100%" src={card} alt="" />
              {/* product info  */}
              <div className="products_info">
                <div className="article">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
              </div>
              <h1 className="info_header">
                Название товара длинное в две строки наверное
              </h1>
              {/* product info */}
              <div className="all_info">
                {/* info1 */}
                <div className="info1">
                  <img src={c1} alt="" />
                  <p>
                    Размеры: .............................. 12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Площадь:
                    ......................................................33 м2
                  </p>
                </div>
                {/* info3 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Вместимость: ..........................................15
                    чел.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c3} alt="" />
                  <p>
                    Гарантия:
                    ....................................................10 лет
                  </p>
                </div>
              </div>

              {/* price */}
              <div className="price">
                {/* left */}
                <div className="price_left">
                  <div className="discount">
                    <p>6 127 500 ₽</p>
                    <div className="percent">
                      <p>-25%</p>
                    </div>
                  </div>
                  <h1 className="price1">5 023 900 ₽</h1>
                </div>
                {/* right */}
                <div className="right">
                  <button className="buyBtn">Купить</button>
                </div>
              </div>
            </div>
            {/* card6 */}
            <div className="card2">
              <img width="100%" src={card} alt="" />
              {/* product info  */}
              <div className="products_info">
                <div className="article">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
              </div>
              <h1 className="info_header">
                Название товара длинное в две строки наверное
              </h1>
              {/* product info */}
              <div className="all_info">
                {/* info1 */}
                <div className="info1">
                  <img src={c1} alt="" />
                  <p>
                    Размеры: .............................. 12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Площадь:
                    ......................................................33 м2
                  </p>
                </div>
                {/* info3 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Вместимость: ..........................................15
                    чел.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c3} alt="" />
                  <p>
                    Гарантия:
                    ....................................................10 лет
                  </p>
                </div>
              </div>

              {/* price */}
              <div className="price">
                {/* left */}
                <div className="price_left">
                  <div className="discount">
                    <p>6 127 500 ₽</p>
                    <div className="percent">
                      <p>-25%</p>
                    </div>
                  </div>
                  <h1 className="price1">5 023 900 ₽</h1>
                </div>
                {/* right */}
                <div className="right">
                  <button className="buyBtn">Купить</button>
                </div>
              </div>
            </div>
            {/* card7*/}
            <div className="card2">
              <img width="100%" src={card} alt="" />
              {/* product info  */}
              <div className="products_info">
                <div className="article">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
              </div>
              <h1 className="info_header">
                Название товара длинное в две строки наверное
              </h1>
              {/* product info */}
              <div className="all_info">
                {/* info1 */}
                <div className="info1">
                  <img src={c1} alt="" />
                  <p>
                    Размеры: .............................. 12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Площадь:
                    ......................................................33 м2
                  </p>
                </div>
                {/* info3 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Вместимость: ..........................................15
                    чел.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c3} alt="" />
                  <p>
                    Гарантия:
                    ....................................................10 лет
                  </p>
                </div>
              </div>

              {/* price */}
              <div className="price">
                {/* left */}
                <div className="price_left">
                  <div className="discount">
                    <p>6 127 500 ₽</p>
                    <div className="percent">
                      <p>-25%</p>
                    </div>
                  </div>
                  <h1 className="price1">5 023 900 ₽</h1>
                </div>
                {/* right */}
                <div className="right">
                  <button className="buyBtn">Купить</button>
                </div>
              </div>
            </div>
            {/* card8 */}
            <div className="card2">
              <img width="100%" src={card} alt="" />
              {/* product info  */}
              <div className="products_info">
                <div className="article">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
              </div>
              <h1 className="info_header">
                Название товара длинное в две строки наверное
              </h1>
              {/* product info */}
              <div className="all_info">
                {/* info1 */}
                <div className="info1">
                  <img src={c1} alt="" />
                  <p>
                    Размеры: .............................. 12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Площадь:
                    ......................................................33 м2
                  </p>
                </div>
                {/* info3 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Вместимость: ..........................................15
                    чел.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c3} alt="" />
                  <p>
                    Гарантия:
                    ....................................................10 лет
                  </p>
                </div>
              </div>

              {/* price */}
              <div className="price">
                {/* left */}
                <div className="price_left">
                  <div className="discount">
                    <p>6 127 500 ₽</p>
                    <div className="percent">
                      <p>-25%</p>
                    </div>
                  </div>
                  <h1 className="price1">5 023 900 ₽</h1>
                </div>
                {/* right */}
                <div className="right">
                  <button className="buyBtn">Купить</button>
                </div>
              </div>
            </div>
            {/* card9*/}
            <div className="card2">
              <img width="100%" src={card} alt="" />
              {/* product info  */}
              <div className="products_info">
                <div className="article">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
              </div>
              <h1 className="info_header">
                Название товара длинное в две строки наверное
              </h1>
              {/* product info */}
              <div className="all_info">
                {/* info1 */}
                <div className="info1">
                  <img src={c1} alt="" />
                  <p>
                    Размеры: .............................. 12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Площадь:
                    ......................................................33 м2
                  </p>
                </div>
                {/* info3 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Вместимость: ..........................................15
                    чел.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c3} alt="" />
                  <p>
                    Гарантия:
                    ....................................................10 лет
                  </p>
                </div>
              </div>

              {/* price */}
              <div className="price">
                {/* left */}
                <div className="price_left">
                  <div className="discount">
                    <p>6 127 500 ₽</p>
                    <div className="percent">
                      <p>-25%</p>
                    </div>
                  </div>
                  <h1 className="price1">5 023 900 ₽</h1>
                </div>
                {/* right */}
                <div className="right">
                  <button className="buyBtn">Купить</button>
                </div>
              </div>
            </div>
            {/* card10 */}
            <div className="card2">
              <img width="100%" src={card} alt="" />
              {/* product info  */}
              <div className="products_info">
                <div className="article">
                  <p>Артикул: </p>
                  <p>0000001</p>
                </div>
              </div>
              <h1 className="info_header">
                Название товара длинное в две строки наверное
              </h1>
              {/* product info */}
              <div className="all_info">
                {/* info1 */}
                <div className="info1">
                  <img src={c1} alt="" />
                  <p>
                    Размеры: .............................. 12.3 x 14.6 x 4.3 м.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Площадь:
                    ......................................................33 м2
                  </p>
                </div>
                {/* info3 */}
                <div className="info1">
                  <img src={c2} alt="" />
                  <p>
                    Вместимость: ..........................................15
                    чел.
                  </p>
                </div>
                {/* info2 */}
                <div className="info1">
                  <img src={c3} alt="" />
                  <p>
                    Гарантия:
                    ....................................................10 лет
                  </p>
                </div>
              </div>

              {/* price */}
              <div className="price">
                {/* left */}
                <div className="price_left">
                  <div className="discount">
                    <p>6 127 500 ₽</p>
                    <div className="percent">
                      <p>-25%</p>
                    </div>
                  </div>
                  <h1 className="price1">5 023 900 ₽</h1>
                </div>
                {/* right */}
                <div className="right">
                  <button className="buyBtn">Купить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section:hit_products ended */}
    </>
  );
}
export default Products;
