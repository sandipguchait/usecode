'use client'
import React, { useState } from 'react';

const SampleComponent = () => {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

    const addItem = () => {
        const newItem = `Item ${items.length + 1}`;
        setItems([...items, newItem]);
    };

    return (
        <div>
            <h1>Sample Component</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
        </div>
    );
};

export default SampleComponent;

