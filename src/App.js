import React from "react";
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import CakeBlock from "./components/CakeBlock";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />

            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <CakeBlock
              title="Молочная девочка"
              size={0.5}
              size2={1}
              size3={2}
              type="бисквитное"
              type2="слоеное"
              price={1200}
              imageUrl="https://british-bakery.ru/upload/resize_cache/iblock/ac3/700_500_1/0hdyneco3wpy04adrxmq0rbobcalk8c1.jpg"
            />
            <CakeBlock
              title="Торт Маковый"
              size={0.5}
              size2={1}
              size3={2}
              type="бисквитное"
              type2="слоеное"
              price={1200}
              imageUrl="https://british-bakery.ru/upload/iblock/567/5677bc6fd8710fa779bd61c9d3efe07b.jpg"
            />
            <CakeBlock
              title="Торт Зеркальный"
              size={0.5}
              size2={1}
              size3={2}
              type="бисквитное"
              type2="слоеное"
              price={1200}
              imageUrl="https://british-bakery.ru/upload/iblock/cc7/cc750c8ed13c369a960ed20ed261c03e.jpg"
            />
            <CakeBlock
              title="Торт Трюфельный"
              size={0.5}
              size2={1}
              size3={2}
              type="бисквитное"
              type2="слоеное"
              price={1200}
              imageUrl="https://british-bakery.ru/upload/iblock/083/0830156dde2d7090c5983f53e74cac0b.jpg"
            />
            <CakeBlock
              title="Торт Чизкейк"
              size={0.5}
              size2={1}
              size3={2}
              type="бисквитное"
              type2="слоеное"
              price={1200}
              imageUrl="https://british-bakery.ru/upload/iblock/a5d/a5d1458d940a7213ed77e84b4a563d8e.jpg"
            />
            <CakeBlock
              title="Торт Сметанник"
              size={0.5}
              size2={1}
              size3={2}
              type="бисквитное"
              type2="слоеное"
              price={1200}
              imageUrl="https://british-bakery.ru/upload/iblock/74c/74c2f6cbf3ccbc7cf2edf3c398d183ba.jpg"
            />
            <CakeBlock
              title="Торт Красный бархат"
              size={0.5}
              size2={1}
              size3={2}
              type="бисквитное"
              type2="слоеное"
              price={1200}
              imageUrl="https://british-bakery.ru/upload/resize_cache/iblock/0a1/700_500_1/0a16216f9ca710fbfaa7f6658fc95aac.jpg"
            />
            <CakeBlock
              title="Торт Ягодный"
              size={0.5}
              size2={1}
              size3={2}
              type="бисквитное"
              type2="слоеное"
              price={1200}
              imageUrl="https://british-bakery.ru/upload/resize_cache/iblock/d5c/700_500_1/d5c070f389ab70ab559b2c8b4ea629cc.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
