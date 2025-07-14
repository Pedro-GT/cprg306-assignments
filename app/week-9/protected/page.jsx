'use client';
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "../components/item-list";
import { useState, useEffect } from "react";
import shopItems from "../components/item.json";
import ItemForm from "../components/item-form";
import MealIdeas from "../components/meal_ideas";
import Link from "next/link";

export default function ProtectedPage() {

const { user,firebaseSignOut,gitHubSignIn } = useUserAuth();
let itemsData = shopItems;
    const [items, setItems] = useState(itemsData);
    const [ideas, setIdeas] = useState();
    const [selectedItem, setSelectedItem] = useState(null);

    const AddItemFunc = (newItem) => {
        setItems([...items, newItem]);
    }
    async function handleSignOut() {
        try {
        await firebaseSignOut();
        } catch (error) {
        console.error("Error signing in:", error);
        }
    }
        async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
        console.error("Error signing in:", error);
        }
    }
    useEffect(() => {
        console.log("Selected Item:", selectedItem);
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${selectedItem}`) 
        .then((response) => response.json()) 
        .then((data) => setIdeas(data.meals)) 
        .catch((error) => console.error(error));
    }, [selectedItem]);

return (
    <main className="bg-red-800 p-24 flex flex-col gap-4">
        <h1 className="text-3xl">Protected Page</h1>
                        {user ? (
                    <>
                        <button onClick={handleSignOut} className="text-lg bg-red-500 hover:bg-red-600  rounded p-2 w-32">Logout</button>
                        <Link className="text-cyan-400 underline hover:text-cyan-600" href={'./week-9/protected'}>Protected page</Link>
                    </>
                ) : (
                    <button onClick={handleSignIn} className="text-lg bg-cyan-500 hover:bg-cyan-600rounded p-2 w-32">Login</button>
                )}

        {user ? (
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
        ) : (
            <p className="text-lg">You must be logged in to view this page.</p>
        )}
    </main>
  );


}