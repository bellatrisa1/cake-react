import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onClickCategory(0)}
          className={activeIndex === 0 ? "active" : ""}
        >
          Все
        </li>
        <li
          onClick={() => onClickCategory(1)}
          className={activeIndex === 1 ? "active" : ""}
        >
          Бисквитные
        </li>
        <li
          onClick={() => onClickCategory(2)}
          className={activeIndex === 2 ? "active" : ""}
        >
          Мусовые
        </li>
        <li
          onClick={() => onClickCategory(3)}
          className={activeIndex === 3 ? "active" : ""}
        >
          Фруктовые
        </li>
        <li
          onClick={() => onClickCategory(4)}
          className={activeIndex === 4 ? "active" : ""}
        >
          Слоеные
        </li>
        <li
          onClick={() => onClickCategory(5)}
          className={activeIndex === 5 ? "active" : ""}
        >
          Шоколадные
        </li>
      </ul>
    </div>
  );
}

export default Categories;
