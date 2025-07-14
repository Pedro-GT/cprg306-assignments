'use client';

import { useState, useEffect } from "react";
import shopItems from "./components/item.json";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {

    let itemsData = shopItems;
    const [items, setItems] = useState(itemsData);
    const [ideas, setIdeas] = useState();
    const [selectedItem, setSelectedItem] = useState(null);

    const { gitHubSignIn, user, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
            window.location.href = './week-9/protected';

        } catch (error) {
        console.error("Error signing in:", error);
        }
    }

    async function handleSignOut() {
        try {
        await firebaseSignOut();
        } catch (error) {
        console.error("Error signing in:", error);
        }
    }

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

    return(

        <main>
            <div className="flex justify-center items-center mt-5 gap-10">
                {user ? (
                    <>
                        <button onClick={handleSignOut} className="text-lg bg-red-500 hover:bg-red-600  rounded p-2 w-32">Logout</button>
                        <Link className="text-cyan-400 underline hover:text-cyan-600" href={'./week-9/protected'}>Protected page</Link>
                    </>
                ) : (
                    <button onClick={handleSignIn} className="text-lg bg-cyan-500 hover:bg-cyan-600rounded p-2 w-32">Login</button>
                )}
            </div>
        </main>

    );


}