import { useState } from 'react';

const [quantity, setQuantity] = useState(0);

const increment = () => setQuantity(quantity + 1);
const decrement = () => setQuantity(quantity - 1);

export { increment, decrement, quantity, setQuantity };
