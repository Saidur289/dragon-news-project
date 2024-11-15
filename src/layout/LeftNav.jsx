import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div>
      <h1 className="font-semibold">All Categories ({categories.length})</h1>
      <div className="flex flex-col gap-2 pt-5">
        {categories.map((category) => (
          <NavLink className='btn'
            key={category.category_id}
            to={`/category/${category.category_id}`}
          >{category.category_name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
