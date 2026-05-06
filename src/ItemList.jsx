import React, { useEffect, useState } from 'react'

const ItemList = () => {
    const [items, setItems] = useState(["apple", "banana", "orange"])

    useEffect(() => {
        console.log("useEffect로 아이템 변경됨");
    }, [items]);

    const addItem = () => {
        const newItem = prompt("newItem 입력:");
        if (newItem) {
            setItems((prevItem) => [...prevItem, newItem]);
        }
    }
    return (
        <div>
            <h2>Items</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={addItem} className="border">
                Add Item
            </button>
        </div>
    )
}

export default ItemList