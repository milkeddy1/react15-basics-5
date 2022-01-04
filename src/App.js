import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
console.log('123');
let count = 0;
function App() {

  const allCategories = ['all', ...new Set(items.map((item) => item.category))]
  console.log(allCategories);
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
    } else {
      const newItems = items.filter((item) => item.category === category)
      setMenuItems(newItems)
    }
  }


  count++

  console.log(`run ${count} times`)

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItems={filterItems} allCategories={allCategories} />
      <Menu items={menuItems} />
    </section>
  </main>;
}

export default App;