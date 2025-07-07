'use client';
import { useState } from "react";

export default function Item({item, onSelect}) {

    const cleanItemName = (name) => {
        // Remove emojis using regex
        let cleaned = name.replace(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F700}-\u{1F77F}]|[\u{1F780}-\u{1F7FF}]|[\u{1F800}-\u{1F8FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '');
        
        // Remove everything after comma (quantities, descriptions)
        cleaned = cleaned.split(',')[0];
        
        // Remove punctuation and special characters
        cleaned = cleaned.replace(/[^\w\s]/g, '');
        
        // Replace spaces with underscores and convert to lowercase
        cleaned = cleaned.trim().toLowerCase().replace(/\s+/g, '_');
        
        return cleaned;
    }

    const handleClick = () => {
        let selectedItem = cleanItemName(item.name);
        onSelect(selectedItem);
    }

    return(


        <div onClick={handleClick} className=" bg-red-800 m-5 p-2 w-50 rounded-2xl ">
            <h2>Name: {item.name}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Category: {item.category}</p>
        </div>

    );


}
