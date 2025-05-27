'use client';

import Link from "next/link";
import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);

    function increment() {
        if (quantity < 20){
            setQuantity(quantity + 1);
        }
        else {
            alert("You cannot add more than 20 items.");
        }
    }

    function decrement() {
        if (quantity > 0){
            setQuantity(quantity - 1);
        }
        else {
            alert("You cannot have less than 0 items.");
        }
    }

    return (
        <main className="items-center justify-center flex flex-col h-screen">
            <h1>quantity</h1>
            <div className="flex items-center">
                {  quantity > 0 ? 
                    <button onClick={decrement} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded">
                        -
                    </button>
                    :
                    <button onClick={decrement} className="px-4 py-2 bg-gray-300 text-white rounded" disabled>
                        -
                    </button>
                }
                <span className="mx-4 text-xl">{quantity}</span>
                {  quantity < 20 ? 
                    <button onClick={increment} className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded">
                        +
                    </button>
                    :
                    <button disabled onClick={increment} className="px-4 py-2 bg-gray-300 text-white rounded">
                        +
                    </button>         
                }
            </div>
            <Link href={'/'}>Home</Link>
        </main>
    );

}