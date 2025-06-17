'use client';

import ItemList from "./item-list";
import { useState } from "react";
import shopItems from "./item.json";
import ItemForm from "./item-form";

export default function Page() {

let itemsData = shopItems;
const [items, setItems] = useState(itemsData);

const AddItemFunc = (newItem) => {
    setItems([...items, newItem]);
}

return(

    <main>
        <ItemForm AddItemFunc={AddItemFunc} ></ItemForm>
        <ItemList itemsData = {items} />
    </main>

);


}