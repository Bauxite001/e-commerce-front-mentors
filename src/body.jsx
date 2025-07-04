import cart from "./assets/icon-cart.svg";
import minus from "./assets/icon-minus.svg";
import plus from "./assets/icon-plus.svg";

function Body(prop) {
	return (
		<main
			className="w-[90%] md:w-[80%] max-w-[500px] mx-auto md:mx-0"
			onClick={prop.closeCart}
		>
			<p className="text-gray-400 text-[12px] tracking-widest font-bold mb-2">
				SNEAKER COMPANY
			</p>

			<h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
				Fall Limited Edition Sneakers
			</h1>

			<p className="text-gray-500 text-[15px] leading-relaxed mb-6">
				These low-profile sneakers are your perfect casual wear companion.
				Featuring a durable rubber outer sole, they’ll withstand everything the
				weather can offer.
			</p>

			{/* Pricing */}
			<div className="flex items-center justify-between md:flex-col md:items-start md:gap-2 mb-6">
				<div className="flex items-center gap-4">
					<p className="text-2xl font-bold">$125.00</p>
					<span className="text-white bg-[black] px-2 py-[2px] text-sm font-bold rounded-md">
						50%
					</span>
				</div>
				<s className="text-gray-400 text-sm font-semibold">$250.00</s>
			</div>

			{/* Controls */}
			<div className="flex flex-col md:flex-row gap-4">
				{/* Quantity */}
				<div className="bg-gray-100 flex justify-between items-center px-4 py-3 rounded-lg md:w-[150px]">
					<button onClick={prop.decreCount}>
						<img src={minus} alt="decrease" className="w-3 cursor-pointer" />
					</button>
					<p className="font-semibold">{prop.count}</p>
					<button onClick={prop.increCount}>
						<img src={plus} alt="increase" className="w-3 cursor-pointer" />
					</button>
				</div>

				{/* Add to Cart */}
				<button
					onClick={prop.addToCart}
					className="bg-[#ff7d1a] hover:bg-orange-500 text-black font-semibold flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-lg shadow-lg gap-3 cursor-pointer"
				>
					<img src={cart} alt="cart icon" className="w-5" />
					Add to cart
				</button>
			</div>
		</main>
	);
}

export default Body;
