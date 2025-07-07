'use client';

import ItemList from "./item-list";
import { useState, useEffect } from "react";
import shopItems from "./item.json";
import ItemForm from "./item-form";
import MealIdeas from "./meal_ideas";

export default function Page() {

    let itemsData = shopItems;
    const [items, setItems] = useState(itemsData);
    const [ideas, setIdeas] = useState();
    const [selectedItem, setSelectedItem] = useState(null);

    const AddItemFunc = (newItem) => {
        setItems([...items, newItem]);
    }

    useEffect(() => {
        console.log("Selected Item:", selectedItem);
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${selectedItem}`) 
        .then((response) => response.json()) 
        .then((data) => setIdeas(data.meals)) 
        .catch((error) => console.error(error));
    }, [selectedItem]);

    console.log(ideas);
    return(

        <main>
            <div className="flex justify-center items-center mt-5 gap-10">
                <ItemForm AddItemFunc={AddItemFunc} ></ItemForm>
                {ideas && ideas.length > 0 ? (
                    <div className="grid grid-cols-1 ">
                        {ideas.slice(0, 5).map((meal) => (
                            <MealIdeas key={meal.idMeal} idea = {meal.strMeal} />
                        ))}
                    </div>
                ) : (
                    <div className="bg-amber-700 mt-10 p-6 rounded-lg shadow-md  h-1/3 ml-20">
                        <h1>Select A meal to get an idea</h1>
                    </div>
                )}
            </div>

            <ItemList onItemSelect={setSelectedItem} itemsData = {items} />
        </main>

    );


}