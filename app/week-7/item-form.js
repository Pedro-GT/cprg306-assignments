'use client';
import { useState } from "react";

export default function ItemForm({ AddItemFunc }) {

    const [formData, setFormData] = useState
    ({
        id: '',
        name: '',
        category: '',
        quantity: ''
    });


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: formData.id,
            name: formData.name,
            category: formData.category,
            quantity: formData.quantity
        };

        AddItemFunc(newItem);

        setFormData({
            id: '',
            name: '',
            category: '',
            quantity: ''
        });

    }

return(

    <form onSubmit={handleSubmit} className="bg-amber-700 mt-10 p-6 rounded-lg shadow-md w-1/3 h-1/3 ml-20">
        <h1>Add Item</h1>
        <div className="grid grid-cols-2 gap-1">
            <div className="mb-4">
                <label htmlFor="id">Id:</label>
                <input className="border rounded p-2" onChange={handleChange} type="number" id="id" name="id" required />
            </div>
            <div className="mb-4" >
                <label htmlFor="name">Name:</label>
                <input className="border rounded p-2" onChange={handleChange} type="text" id="name" name="name" required />
            </div>
            <div className="mb-4">
                <label htmlFor="category">Category:</label>
                <input className="border rounded p-2" onChange={handleChange} type="text" id="category" name="category" required />
            </div>
            <div className="mb-4">
                <label htmlFor="quantity">Quantity:</label>
                <input className="border rounded p-2" onChange={handleChange} type="number" id="quantity" name="quantity" required />
            </div>
            <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded">
                Add Item
            </button>
        </div>
        
    </form>

);


}