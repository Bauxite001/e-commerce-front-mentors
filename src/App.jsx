import { useState, useEffect } from "react";
import Header from "./Header";
import Images from "./Images";
import Body from "./Body";
import Cart from "./Cart";
import thumbs1 from "./assets/image-product-1-thumbnail.jpg";

function App() {
	const [count, setCount] = useState(0);
	const [cartItems, setCartItems] = useState([]);
	const [cartOpen, setCartOpen] = useState(false);

	const increCount = () => setCount((c) => c + 1);
	const decreCount = () => setCount((c) => (c <= 0 ? 0 : c - 1));

	// Add to Cart with quantity stacking logic
	const addToCart = () => {
		if (count === 0) return;

		const newItem = {
			name: "Fall Limited Edition Sneakers",
			price: 125,
			image: thumbs1,
			quantity: count,
		};

		setCartItems((prevItems) => {
			const existing = prevItems.find((item) => item.name === newItem.name);
			if (existing) {
				return prevItems.map((item) =>
					item.name === newItem.name
						? { ...item, quantity: item.quantity + count }
						: item
				);
			}
			return [...prevItems, newItem];
		});

		setCount(0); // reset input count
	};

	const clearCart = () => setCartItems([]);
	const toggleCart = () => setCartOpen(!cartOpen);
	const toggleBody = () => setCartOpen(false);

	// Load cart from localStorage
	useEffect(() => {
		try {
			const saved = localStorage.getItem("cartItems");
			if (saved) setCartItems(JSON.parse(saved));
		} catch (e) {
			console.error("Failed to load cart from localStorage:", e);
		}
	}, []);

	// Save cart to localStorage
	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	}, [cartItems]);

	return (
		<div className="kumbh-sans">
			<Header cartItems={cartItems} toggleCart={toggleCart} />
			{cartOpen && <Cart cartItems={cartItems} clearCart={clearCart} />}

			<main
				className="w-[70%] max-w-[1200px] md:px-12 mx-auto flex flex-col md:flex-row gap-10 md:justify-center items-center md:gap-25"
				onClick={toggleBody}
			>
				<Images />
				<Body
					count={count}
					increCount={increCount}
					decreCount={decreCount}
					addToCart={addToCart}
				/>
			</main>
		</div>
	);
}

export default App;
