import { useState } from "react";

export function useCart() {
    const [cart, setCart] = useState([]);

    const add = (item) => {
        setCart((prev) => [...prev, item]);
    };

    const remove = (idx) => {
        setCart((prev) => prev.filter((_, i) => i !== idx));
    };

    const clear = () => setCart([]);

    const totalCount = cart.length;

    return { cart, add, remove, clear, totalCount };
}
