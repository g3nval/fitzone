import { useState } from 'react';

export function useCart() {
    const [cart, setCart] = useState([]);

    const add = (item) => {
        // item có thể là { name, price } hoặc object lạ
        if (!item || typeof item !== 'object') return;
        const cleanItem = {
            name: item.name ?? '',
            price: item.price ?? '',
            icon: item.icon ?? '🛍️',
        };
        setCart((prev) => [...prev, cleanItem]);
    };

    const remove = (index) => {
        setCart((prev) => prev.filter((_, i) => i !== index));
    };

    const clear = () => setCart([]);

    const totalCount = cart.length;

    return { cart, add, remove, clear, totalCount };
}
