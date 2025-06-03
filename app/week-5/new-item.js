'use client';

import Link from "next/link";
import { useState } from "react";

export default function NewItem() {
    let inputStyle = "bg-black border border-amber-300 p-2 rounded w-70 focus:outline-none focus:ring-2 focus:ring-red-800";


    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

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

    const handleChangeQuantity = (e) => {
    if (e.target.value <= 20 && e.target.value >= 0) {
        setQuantity(e.target.value);
    }
    else {
        alert("quantity can't be higher than 20 or lower than 0");
        setQuantity(1);
    }
}

    const handleSubmit = (e) => {

        e.preventDefault();
        let item = {
            name: name,
            category: category,
            quantity: quantity
        };
        console.log(item);
        alert(`${name} + ${category} + ${quantity}`);
        setName("");
        setCategory("produce");
        setQuantity(1);

    }

    const handleReset = () => {
        setName("");
        setCategory("produce");
        setQuantity(1);
    }


    return (
        <div className="items-center justify-center flex flex-col h-screen">
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

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border w-80 rounded bg-gray-950 border-amber-400">
                <label className="">Name</label>
                <input name="name" value={name} onChange={ (e) => setName(e.target.value) } type="text" placeholder="Enter your name" className={inputStyle}/>

                <label>Category</label>    
                <select name="category" value={category} onChange={(e) => setCategory(e.target.value) } className={inputStyle}>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="frozen">Frozen Foods</option>
                    <option value="canned">Canned Goods</option>
                    <option value="household">Household</option>
                    <option value="dry-goods">Dry Goods</option>
                    <option value="other">Other</option>
                </select>

                <label>Quantity</label>    
                <input name="quantity" value={quantity} onChange={handleChangeQuantity } type = "text" placeholder="Enter your phone" className = {inputStyle}/>

                <div className="flex flex-row gap-2">
                    <button type="submit" className="bg-green-600 hover:bg-green-500 w-25 rounded">Submit</button>
                    <button onClick={handleReset} className="bg-yellow-600 hover:bg-yellow-500 w-25 rounded">Reset</button>
                </div>
            </form>
        
        </div>
    );

}
