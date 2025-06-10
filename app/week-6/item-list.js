'use client';
import Item from "./item";
import { use, useState } from "react";
import shopItems from "./item.json";

export default function ItemList() {

let items = shopItems

const [sortBy, setSortBy] = useState("name");
let sortedItems = items.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

const handleSort = (sortBy) => {
    setSortBy(sortBy);
}

return(

    <main className="  grid grid-cols-4 gap-1 justify-items-center items-center mt-5">

        <h1 className="text-3xl font-bold text-center col-span-4">Shopping List</h1>
        {sortedItems.map((item) => (
            <Item key={item.id} item={item} />
        ))}
        <div className="col-span-4 flex justify-center gap-4 mb-4">
          <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded" onClick={e => handleSort("category")}>Filter by category</button>
          <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded" onClick={e => handleSort("name")}>Filter by name</button>
        </div>
    </main>

);


}