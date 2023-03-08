import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";


const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI
  const [searchParams, setSearchParams] = useSearchParams();

  const [category, setCategory] = useState( searchParams.getAll("category") ||  []);
console.log(category)

const handleFilter = (e) => {
  let option = e.target.value;
  const newCategory = [...category];
  if (newCategory.includes(option)) {
    newCategory.splice(newCategory.indexOf(option), 1);
  } else {
    newCategory.push(option);
  }
  setCategory(newCategory);
};
useEffect(() => {
  const params = {};
  category && (params.category = category);
  setSearchParams(params);
}, [category]);



  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="Analog" onChange={handleFilter} defaultChecked={category.includes("Analog")}/>
          <label>Analog</label>
        </div>
        <div>
          <input type="checkbox" value="Digital" onChange={handleFilter} defaultChecked={category.includes("Digital")} />
          <label>Digital</label>
        </div>
        <div>
          <input type="checkbox" value="Chronograph" onChange={handleFilter}  defaultChecked={category.includes("Chronograph")} />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
