'use client';
import Item from "./item";
import { use, useState } from "react";
import shopItems from "./item.json";

export default function ItemList() {

let items = shopItems

const [sortBy, setSortBy] = useState("name");
const [isGroupBy, setIsGroupBy] = useState(false);

let sortedItems = items.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

const handleSort = (sortBy) => {
    setSortBy(sortBy);
}



const groupByCategory = items.reduce((category,item) => {
    let categoryName = item.category;
    if (!category[categoryName]) {
        category[categoryName] = [];
    }
    category[categoryName].push(item);
    return category;
}, {});


return(

    <main className="  grid grid-cols-4 gap-1 justify-items-center items-center mt-5">
        <h1 className="text-3xl font-bold text-center col-span-4">Shopping List</h1>
        
        {isGroupBy? 
          Object.entries(groupByCategory).map(([category, items]) => (
            <div key={category} className="col-span-4">
              <h2 className="text-2xl font-bold">{category}</h2>
              <div className="grid grid-cols-4 gap-1">
                {items.map((item) => (
                  <Item key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))
        :
          sortedItems.map((item) => (
            <Item key={item.id} item={item} />
          ))
        }
        <div className="col-span-4 flex justify-center gap-4 mb-4">
          <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded" onClick={e => handleSort("category")}>Filter by category</button>
          <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded" onClick={e => handleSort("name")}>Filter by name</button>
          <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded" onClick={e => setIsGroupBy(!isGroupBy)}>Group by category</button>
        </div>
    </main>

);


}