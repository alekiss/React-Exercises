import React, { useState } from 'react'
import "./styles.css"

const FilterSearch = () => {

  const list = [
    "Banana", 
    "Apple", 
    "Orange", 
    "Mango", 
    "Pineapple", 
    "Watermelon"
  ]

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {

    if (event.target.value === "") {
      setFilterList(list);
      return;
    }

    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );

    setFilterList(filteredValues);
  };

  return (
    <>
      <div className="filter_container">
      <div>
        <input className="filter_search" onChange={handleSearch} placeholder="Search..."/>
      </div>

      {filterList.map((item, index) => (
          <div className="filter_item" key={index}>{item}</div>
        ))}
    </div>
    </>
  )
}

export default FilterSearch