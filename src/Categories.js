import React from 'react';

const Categories = ({ filterItems, allCategories }) => {

  return <div className="btn-container">
    {allCategories.map((category, index) => <button type="btutton" className="filter-btn" key={index} onClick={() => filterItems(category)}>{category}</button>)
    }
  </div>;
};

export default Categories;
