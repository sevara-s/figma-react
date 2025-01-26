import React from "react";
import "./garden.css";
import item1 from "../assets/imgs/item1.png";
import item2 from "../assets/imgs/item2.png";
import item3 from "../assets/imgs/item3.png";
import item4 from "../assets/imgs/item4.png";
import item5 from "../assets/imgs/item5.png";
import item6 from "../assets/imgs/item6.png";

function Garden() {
  return (
    <>
      <div className="garden_furniture">
        <div className="container">
          <h1 className="header1">Категории</h1>
          <div className="all_items">
            {/* item1 */}
            <div className="item1">
              <h2 id="h2">Беседки</h2>
              <div className="items">
                <ul>
                  <li>Подкатегория 1</li>
                  <li>Подкатегория 2</li>
                  <li>Подкатегория 3</li>
                </ul>
                <ul>
                  <li>Подкатегория 4</li>
                  <li>Подкатегория 5</li>
                  <li>Подкатегория 6</li>
                </ul>
              </div>
              <img src={item1} alt="" />
            </div>
            {/* item1 */}

            {/* item2 */}
            <div className="item2">
              {/* small_item1 */}
              <div className="small_item1">
                <div className="item_left">
                  <h3>Бани</h3>
                  <p>Подкатегория 1</p>
                  <p>Подкатегория 2</p>
                </div>
                <img src={item2} alt="" />
              </div>
              {/* small_item2 */}
              <div className="small_item1">
                <div className="item_left">
                  <h3>Бани</h3>
                  <p>Подкатегория 1</p>
                  <p>Подкатегория 2</p>
                </div>
                <img src={item3} alt="" />
              </div>
              {/* small_item3 */}
              <div className="small_item1">
                <div className="item_left">
                  <h3>Бани</h3>
                  <p>Подкатегория 1</p>
                  <p>Подкатегория 2</p>
                </div>
                <img src={item4} alt="" />
              </div>
            </div>

            {/* item3 */}
            <div className="item3">
              {/* playground */}
              <div className="small_item1">
                <div className="item_left">
                  <h3>Детские площадки</h3>
                  <p>Подкатегория 1</p>
                  <p>Подкатегория 2</p>
                  <p>Подкатегория 3</p>
                  <p>Подкатегория 4</p>
                  <p>Подкатегория 5</p>
                </div>
                <img src={item5} alt="" />
              </div>
              {/* playground */}
              <div className="small_item1">
                <div className="item_left">
                  <h3>Детские площадки</h3>
                  <p>Подкатегория 1</p>
                  <p>Подкатегория 2</p>
                  <p>Подкатегория 3</p>
                  <p>Подкатегория 4</p>
                </div>
                <img src={item6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Garden;
