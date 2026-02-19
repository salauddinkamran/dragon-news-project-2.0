import React, { use } from "react";
import { NavLink } from "react-router";

const categoriesPromis = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoriesPromis);
  return (
    <div>
      <h3 className="font-bold">All Categories ({categories.length})</h3>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {categories.map((categorie) => (
          <NavLink
            key={categorie.id}
            className={
              "btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent"
            }
            to={`/category/${categorie.id}`}
          >
            {categorie.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
