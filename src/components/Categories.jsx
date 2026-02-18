import React, { use } from "react";

const categoriesPromis = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoriesPromis);
  return (
    <div>
      <h3 className="font-bold">All Categories ({categories.length})</h3>
    </div>
  );
};

export default Categories;
